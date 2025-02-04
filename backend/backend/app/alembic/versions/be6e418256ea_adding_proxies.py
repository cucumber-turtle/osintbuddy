"""Adding proxies

Revision ID: be6e418256ea
Revises: 2c41f4c18f94
Create Date: 2022-12-18 23:35:30.992457

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'be6e418256ea'
down_revision = '2c41f4c18f94'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('proxy_type',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_proxy_type_id'), 'proxy_type', ['id'], unique=False)
    op.drop_index('ix_launch_list_email', table_name='launch_list')
    op.drop_index('ix_launch_list_id', table_name='launch_list')
    op.drop_table('launch_list')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('launch_list',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.Column('ip', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('created', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='launch_list_pkey')
    )
    op.create_index('ix_launch_list_id', 'launch_list', ['id'], unique=False)
    op.create_index('ix_launch_list_email', 'launch_list', ['email'], unique=False)
    op.drop_index(op.f('ix_proxy_type_id'), table_name='proxy_type')
    op.drop_table('proxy_type')
    # ### end Alembic commands ###
