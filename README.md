# Full-Stack-E-Commerce


## Bedienung

### Initialisieren
```bash
PS C:\...\> docker compose up --build
```

### Starten
```bash
PS C:\...\> docker compose up
```

- Frontend: http://localhost:3001
- Backend: http://localhost:3000
- PostgreSQL: localhost:5432

### Stoppen

```bash
PS C:\...\> docker compose down 
```

### Datenbank zurücksetzen
```bash
PS C:\...\> docker compose down -v
```


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




