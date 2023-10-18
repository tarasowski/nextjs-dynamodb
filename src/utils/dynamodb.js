import { DynamoDBDocumentClient, GetCommand, ScanCommand, UpdateCommand, DeleteCommand, PutCommand } from "@aws-sdk/lib-dynamodb"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"

const client = new DynamoDBClient({region: process.env.AWS_REGION} )
const docClient = DynamoDBDocumentClient.from(client)

export const listItems = async () => {
    try {
        const command = new ScanCommand({
            TableName: process.env.DYNAMODB_TABLE_NAME,
        });
        const response = await docClient.send(command);
        // ? optional chaining 
        return response?.Items ?? []
    } catch (err) {
        console.error(err)
        return []
    };
}

export const getItem = async (todoId) => {
    try {
        const command = new GetCommand({
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Key: {
                id: todoId
            }
        });
        const response = await docClient.send(command);
        console.log({ response })
        return response.Item ?? {}
    } catch (err) {
        console.error(err)
        return {}
    };
}

export const putItem = async (body) => {
    try {

        const command = new PutCommand({
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Item: body
        });

        await docClient.send(command);
        return item
    } catch (err) {
        console.error(err)
        return {}
    };
}