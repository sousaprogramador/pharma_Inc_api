import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from '../common/env';
import { MongooseConstants } from './mongoose.constants';

export const mongooseProviders = [
  {
    provide: MongooseConstants.DATABASE_CONNECTION,
    useFactory: () => mongoose.createConnection(DATABASE_CONNECTION),
  },
];
