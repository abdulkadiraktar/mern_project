provider "aws" {
  region = var.region
}

module "vpc" {
  source = "./vpc"
  cidr_block = var.vpc_cidr_block
}

module "eks" {
  source = "./eks"
  cluster_name = var.cluster_name
  vpc_id = module.vpc.vpc_id
  subnet_ids = module.vpc.subnet_ids
}

module "iam" {
  source = "./iam"
  cluster_name = var.cluster_name
}