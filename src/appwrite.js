import { Client, Databases } from "appwrite";

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("67776e4b002d77abe625"); // Replace with your Appwrite project ID

export { client, databases };
