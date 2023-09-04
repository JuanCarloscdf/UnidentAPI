import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAppointment1689778365914 implements MigrationInterface {
    name = 'AddAppointment1689778365914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`appointment\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`cupdated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`date\` datetime NOT NULL, \`evaluation\` varchar(255) NOT NULL, \`hour\` varchar(255) NOT NULL, \`paid\` int NOT NULL, \`total\` int NOT NULL, \`apptNumber\` int NOT NULL, \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`appointment\` ADD CONSTRAINT \`FK_2a990a304a43ccc7415bf7e3a99\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appointment\` DROP FOREIGN KEY \`FK_2a990a304a43ccc7415bf7e3a99\``);
        await queryRunner.query(`DROP TABLE \`appointment\``);
    }

}
