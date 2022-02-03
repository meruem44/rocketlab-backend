import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddAvatarAndBioField1642608236053 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("users", [
      new TableColumn({
        name: "avatar",
        type: "varchar",
        isNullable: true,
      }),

      new TableColumn({
        name: "bio",
        type: "varchar",
        isNullable: true,
      }),

      new TableColumn({
        name: "job",
        type: "varchar",
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("users", ["bio", "avatar"]);
  }
}
