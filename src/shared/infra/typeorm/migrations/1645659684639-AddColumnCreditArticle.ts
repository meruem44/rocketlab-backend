import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnCreditArticle1645659684639 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "articles",
      new TableColumn({
        name: "credits",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("articles", "credits");
  }
}
