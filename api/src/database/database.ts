import { DataSource } from "typeorm";
import DataSourceFactorySingleton from "./data-source";

export async function initializeDatabase() {
  return DataSourceFactorySingleton.getInstance()
    .initialize()
    .catch((error) => console.log(error));
}

export function getDataSource(): DataSource {
  return DataSourceFactorySingleton.getInstance();
}
