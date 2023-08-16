import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { ORM_CONFIG } from "./configuration/ormconfig";
import { TEST_ORM_CONFIG } from "./configuration/test.ormconfig";

class DataSourceFactorySingleton {
  private static dataSource: DataSource;

  public static getInstance() {
    if (!this.dataSource) {
      const isTestEnv = process.env.NODE_ENV === "test";
      let ormConfig = (isTestEnv ? TEST_ORM_CONFIG : ORM_CONFIG) as DataSourceOptions;
      this.dataSource = new DataSource(ormConfig);
    }

    return DataSourceFactorySingleton.dataSource;
  }
}

export default DataSourceFactorySingleton;
