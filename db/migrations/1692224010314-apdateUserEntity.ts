import { MigrationInterface, QueryRunner } from "typeorm";

export class ApdateUserEntity1692224010314 implements MigrationInterface {
    name = 'ApdateUserEntity1692224010314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`rol\` \`rol\` varchar(255) NOT NULL DEFAULT 'USER'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`rol\` \`rol\` varchar(255) NOT NULL`);
    }

}
