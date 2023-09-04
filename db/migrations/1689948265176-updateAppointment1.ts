import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAppointment11689948265176 implements MigrationInterface {
    name = 'UpdateAppointment11689948265176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appointment\` CHANGE \`period\` \`hour\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`hour\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`hour\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`hour\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`hour\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` CHANGE \`hour\` \`period\` int NOT NULL`);
    }

}
