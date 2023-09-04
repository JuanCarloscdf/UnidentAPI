import { MigrationInterface, QueryRunner } from "typeorm";

export class Addnotices1689716615402 implements MigrationInterface {
    name = 'Addnotices1689716615402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`notice\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`cupdated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`message\` varchar(255) NOT NULL, \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`notice\` ADD CONSTRAINT \`FK_d0d4b8dac89a99634b7e1fde052\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`notice\` DROP FOREIGN KEY \`FK_d0d4b8dac89a99634b7e1fde052\``);
        await queryRunner.query(`DROP TABLE \`notice\``);
    }

}
