# Full-Stack-E-Commerce


## Voraussetzungen
- Node.js
- npm

## Installation & Starten

### Frontend:
```bash
PS C:\...\frontend> npm install
PS C:\...\frontend> npm start
```

### Backend:
- Datenbank in Docker starten
```bash
PS C:\...\> docker compose up -d
```

- CompileDaemon starten
```bash
PS C:\...\backend> compiledaemon --command="./backend"
```

Frontend: "http://localhost:3001"
Backend: "http://localhost:3000"

## Technologien

### Frontend: 
- React
  + Nodejs
  + bootstrap (css toolkit)

### Backend:
- Go
- GIN Web framework
- jwt-go
- bcrypt
- CompileDaemon
- GORM (ORM libary)

### Datenbank
- PostgreSQL
container_name: postgres_database
POSTGRES_DB: postgres
POSTGRES_USER: postgres
POSTGRES_PASSWORD: postgres
ports: 543


- Docker-Container




