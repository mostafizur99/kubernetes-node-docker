# kubernetes-node-docker

A minimal local development setup using **Kubernetes**, **Docker**, and **Node.js** with **Minikube**.

This project demonstrates how to containerize a simple Node.js (Express) app, deploy it to a local Kubernetes cluster using Minikube, and expose it via a NodePort service.

## 📁 Project Structure

```
├── app/
│ ├── index.js
│ └── package.json
│ └── Dockerfile
├── k8s/
│ ├── app-deployment.yaml
│ └── app-service.yaml
├── .gitignore
└── README.md
```

## ✅ Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Minikube](https://minikube.sigs.k8s.io/docs)
- [Kubectl](https://kubernetes.io/docs/tasks/tools)
- Basic understanding of Node.js & Kubernetes

## 🚀 Steps to Run Locally

1. **Start MiniKube**

   `minikube start --driver=docker`

2. **Use Minikube Docker daemon**

   `eval $(minikube docker-env)`

3. **Build App’s Docker image**

   `docker build -t my-k8s-app app/.`

4. **Deploy to Kubernetes**

   `kubectl apply -f k8s/app-deployment.yaml`

5. **Expose via Service**

   `kubectl apply -f k8s/app-service.yaml`

6. **Access in Browser**

   `minikube service my-app-service`

### 🧼 Cleanup Commands

```
kubectl delete -f k8s/

docker rmi my-k8s-app
```
