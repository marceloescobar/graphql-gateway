import { default as connectMongoDBSession} from 'connect-mongodb-session';

const MongoDBStore = connectMongoDBSession(session);

var store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/tmp',
  collection: 'sessions'
});