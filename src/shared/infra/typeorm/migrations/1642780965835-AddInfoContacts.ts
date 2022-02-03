import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddInfoContacts1642780965835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("users", [
      new TableColumn({
        name: "github",
        type: "varchar",
        isNullable: true,
      }),

      new TableColumn({
        name: "linkedin",
        type: "varchar",
        isNullable: true,
      }),

      new TableColumn({
        name: "whatsapp",
        type: "varchar",
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("users", ["whatsapp", "linkedin", "github"]);
  }
}
