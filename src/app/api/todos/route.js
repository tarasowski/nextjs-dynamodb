import { listItems, putItem } from "@/utils/dynamodb"

// lists all todos
export async function GET(req) {
    // i/o -> Promise async/await -> asynchronious
    const todos = await listItems()
    return Response.json(todos)
}

// creates a todo
export async function POST(req) {
    const body = await req.json()
    await putItem(body)
    return Response.json({result: true})
}

export async function DELETE(req) {
    // remove all entries from our database
    return Response.json({result: true})
}