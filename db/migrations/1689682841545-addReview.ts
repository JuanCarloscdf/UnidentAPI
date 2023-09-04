import { MigrationInterface, QueryRunner } from "typeorm";

export class AddReview1689682841545 implements MigrationInterface {
    name = 'AddReview1689682841545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`review\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`cupdated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`image\` varchar(255) NOT NULL, \`mesage\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`review\``);
    }

}
