
---

```md id="cv1readme"
#  CodeVault

CodeVault is a full-stack web application to **store, manage, search, and organize code snippets** in one place.  
It allows developers to quickly save reusable code and find it later using search filters like title, language, and tags.

---

##  Live Demo

Frontend: https://codevault-frontend-phi.vercel.app  
Backend API: https://codevault-backend-7ph6.onrender.com

---

##  Features

- Create code snippets
- View all snippets
- Search snippets (title, language, tags)
- Delete snippets
- Copy code to clipboard
- Fast and responsive UI
- Fully deployed full-stack app

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv

---

##  Setup Instructions

### Backend

```bash id="cv7be"
cd backend
npm install
npm start
```

Create `.env` file:

```env id="cv8env"
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

---

### Frontend

```bash id="cv9fe"
cd frontend
npm install
npm run dev
```

Update API base URL:

```js id="cv10api"
baseURL: "https://codevault-backend-7ph6.onrender.com/api"
```

---

## Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---
## Author

Built by **Kajol** 

---

```

