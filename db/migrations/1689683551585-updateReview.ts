import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateReview1689683551585 implements MigrationInterface {
    name = 'UpdateReview1689683551585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`username\` \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`userId\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`userId\` \`username\` varchar(255) NOT NULL`);
    }

}
