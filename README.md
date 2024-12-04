# MERN Project

MERN Stack Deployment with Kubernetes and Terraform

This project demonstrates the deployment of a MERN (MongoDB, Express.js, React, Node.js) stack application using Kubernetes for orchestration and Terraform for infrastructure provisioning. The application is containerized using Docker and deployed on AWS EKS.

## Project Overview

The MERN application consists of:
- **MongoDB**: NoSQL database for managing user data.
- **Express.js**: Backend framework for API and server logic.
- **React**: Frontend framework for building the user interface.
- **Node.js**: Runtime environment for the backend application.

The goal is to containerize these components, orchestrate them using Kubernetes, and deploy them in a scalable and secure manner on AWS EKS.

---

## Requirements

- **Docker**: 20.x or later
- **Terraform**: 1.5.x
- **Kubernetes**: 1.27.x
- **kubectl**: 1.27.x
- **AWS CLI**: 2.x
- **Minikube**: For local testing
- **GitHub Actions**: For CI/CD pipeline

---

## Infrastructure Setup

### Terraform Configuration

Steps to Set Up EKS:

1. Initialize Terraform:
   ```bash
   terraform init
   ```

2. Plan Infrastructure:
   ```bash
   terraform plan
   ```

3. Apply Changes:
   ```bash
   terraform apply -auto-approve
   ```

### Key Terraform Files

- **`main.tf`**: Contains the primary configuration for AWS provider and EKS cluster.
- **`vpc.tf`**: Configures the VPC, subnets, and networking components.
- **`outputs.tf`**: Outputs the details of the EKS cluster for integration with Kubernetes.
- **`variables.tf`**: Defines input variables such as region, cluster name, and CIDR blocks.

---

## Kubernetes Deployment

1. **Docker Image Build**:
   ```bash
   docker build -t yourdockerhubusername/react-app ./client
   docker build -t yourdockerhubusername/express-api ./server
   ```

2. **Push Images to Docker Hub**:
   ```bash
   docker push yourdockerhubusername/react-app
   docker push yourdockerhubusername/express-api
   ```

3. **Apply Kubernetes Manifests**:
   ```bash
   kubectl apply -f k8s/
   ```

4. **Verify Deployment**:
   ```bash
   kubectl get pods
   kubectl get services
   ```

---

## Resources

### Dockerfiles
- Located in `client/Dockerfile` and `server/Dockerfile`.

### Kubernetes Manifests
- Located in the `k8s/` directory:
  - `react-deployment.yaml`
  - `express-deployment.yaml`
  - `mongo-deployment.yaml`

### Terraform Configuration
- Located in the `terraform/` directory:
  - `main.tf`: Main configuration.
  - `eks/`: EKS-specific resources.
  - `variables.tf`: Variable definitions.

---
