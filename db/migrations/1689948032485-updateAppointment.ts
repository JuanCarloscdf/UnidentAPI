import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAppointment1689948032485 implements MigrationInterface {
    name = 'UpdateAppointment1689948032485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appointment\` CHANGE \`hour\` \`period\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`period\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`period\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP COLUMN \`period\``);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD \`period\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`appointment\` CHANGE \`period\` \`hour\` varchar(255) NOT NULL`);
    }

}
