import { MigrationInterface, QueryRunner } from "typeorm";

export class First1689016655746 implements MigrationInterface {
    name = 'First1689016655746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`cupdated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
