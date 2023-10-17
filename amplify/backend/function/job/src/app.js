const {DynamoDBClient, DeleteItemCommand} = require('@aws-sdk/client-dynamodb');
const {
  DeleteCommand, DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand, ScanCommand
} = require('@aws-sdk/lib-dynamodb');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')
const {uuidEmit} = require('uuid-timestamp');


const ddbClient = new DynamoDBClient({region: process.env.TABLE_REGION});
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

let tableName = "jobsystem";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

const userIdPresent = false;
const path = "/job";
const UNAUTH = 'UNAUTH';

const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

/************************************
 * HTTP Get method to list objects *
 ************************************/

app.get(path, async function (req, res) {
  const params = {
    TableName: tableName,
    KeyConditionExpression: '#TYPE = :TYPE',
    ExpressionAttributeNames: { "#TYPE": "TYPE" },
    ExpressionAttributeValues: {
      ':TYPE': 'JOB#',
    }
  };

  try {
    const data = await ddbDocClient.send(new QueryCommand(params));
    res.json(data.Items);
  } catch (err) {
    res.statusCode = 500;
    res.json({error: 'Could not load items: ' + err.message});
  }
});

/************************************
 * HTTP put method for insert object *
 *************************************/

app.put(path, async function (req, res) {

  if (userIdPresent) {
    req.body['userId'] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  }

  let putItemParams = {
    TableName: tableName, Item: req.body
  }
  try {
    let data = await ddbDocClient.send(new PutCommand(putItemParams));
    res.json({success: 'put call succeed!', url: req.url, data: data})
  } catch (err) {
    res.statusCode = 500;
    res.json({error: err, url: req.url, body: req.body});
  }
});

/************************************
 * HTTP post method for insert object *
 *************************************/

app.post(path, async function (req, res) {
  console.log(userIdPresent)
  if (userIdPresent) {
    req.body['userId'] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  }

  console.log(req.body)

  const body = {...req.body}
  body.ID = uuidEmit();
  body.TYPE = 'JOB#'

  let putItemParams = {
    TableName: tableName, Item: body
  }
  // try {
  //   let data = await ddbDocClient.send(new PutCommand(putItemParams));
  //   res.json({success: 'post call succeed!', url: req.url, data: data})
  // } catch (err) {
  //   res.statusCode = 500;
  //   res.json({error: err, url: req.url, body: req.body});
  // }
});

/**************************************
 * HTTP remove method to delete object *
 ***************************************/

app.delete(`${path}/:sk/:pk`, async function (req, res) {
  const params = {
    TableName: tableName,
    Key: {
      "TYPE": {
        "S": `${req.params['pk']}#`
      },
      "ID": {
        "S": req.params['sk']
      }
    }
  };
  console.log(params)

  try {
    let data = await ddbDocClient.send(new DeleteItemCommand(params));
    res.json({url: req.url, data: data});
  } catch (err) {
    res.statusCode = 500;
    res.json({error: err});
  }
});

app.listen(3000, function () {
  console.log("App started")
});

module.exports = app
