import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateReview41689688094914 implements MigrationInterface {
    name = 'UpdateReview41689688094914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_1337f93918c70837d3cea105d39\` ON \`review\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`userId\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`FK_1337f93918c70837d3cea105d39\` ON \`review\` (\`userId\`)`);
    }

}
