import { migration as createTables } from './001_create_tables';
import { migration as setupStorage } from './002_setup_storage';

// Export all migrations in order
export const migrations = [
  createTables,
  setupStorage
]; 