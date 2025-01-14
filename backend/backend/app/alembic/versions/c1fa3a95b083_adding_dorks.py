"""Adding dorks

Revision ID: c1fa3a95b083
Revises: 437ac59e7240
Create Date: 2022-12-19 00:02:00.494025

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c1fa3a95b083'
down_revision = '437ac59e7240'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('dork_authors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_dork_authors_id'), 'dork_authors', ['id'], unique=False)
    op.create_table('dork_categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_dork_categories_id'), 'dork_categories', ['id'], unique=False)
    op.create_table('google_dorks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dork', sa.String(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.Column('created', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['dork_authors.id'], ),
    sa.ForeignKeyConstraint(['category_id'], ['dork_categories.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_google_dorks_id'), 'google_dorks', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_google_dorks_id'), table_name='google_dorks')
    op.drop_table('google_dorks')
    op.drop_index(op.f('ix_dork_categories_id'), table_name='dork_categories')
    op.drop_table('dork_categories')
    op.drop_index(op.f('ix_dork_authors_id'), table_name='dork_authors')
    op.drop_table('dork_authors')
    # ### end Alembic commands ###
