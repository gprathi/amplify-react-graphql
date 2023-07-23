// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Vacationtype = {
  "CRUISE": "CRUISE",
  "ALL_INCLUSIVE": "ALL_INCLUSIVE",
  "NATIONAL_PARKS": "NATIONAL_PARKS",
  "EUROPE": "EUROPE"
};

const { Lead } = initSchema(schema);

export {
  Lead,
  Vacationtype
};