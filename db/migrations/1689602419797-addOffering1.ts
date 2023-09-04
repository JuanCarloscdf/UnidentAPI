import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOffering11689602419797 implements MigrationInterface {
    name = 'AddOffering11689602419797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offering\` DROP COLUMN \`user_id\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offering\` ADD \`user_id\` varchar(255) NOT NULL`);
    }

}
