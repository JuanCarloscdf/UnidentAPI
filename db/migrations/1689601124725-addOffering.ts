import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOffering1689601124725 implements MigrationInterface {
    name = 'AddOffering1689601124725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`offering\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`cupdated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`user_id\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`message\` varchar(255) NOT NULL, \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`offering\` ADD CONSTRAINT \`FK_10243227d6ef34c4515f94aaf1a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offering\` DROP FOREIGN KEY \`FK_10243227d6ef34c4515f94aaf1a\``);
        await queryRunner.query(`DROP TABLE \`offering\``);
    }

}
