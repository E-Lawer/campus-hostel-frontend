#!/bin/bash

# Create README.md
cat <<EOL > README.md
# 🏫 Campus Hostel Management Platform

## 📖 Project Overview
This project is a web-based **Campus Hostel Management System** that allows students to **register, log in, view available rooms**, and **apply for hostel rooms**.
Admins can **manage rooms**, **view student applications**, and **approve/reject applications**.

---

## 🌍 Deployment Links

| Platform             | Link                          |
|----------------------|-------------------------------|
| 🚀 Frontend (GitHub Pages) | [your-frontend-live-link]     |
| 🚀 Backend (Render)    | [your-backend-live-link]      |
| 📂 Frontend GitHub Repo | [your-frontend-repo-link]     |
| 📂 Backend GitHub Repo  | [your-backend-repo-link]      |

---

## 🔐 Login Details

| Role            | Username             | Password    |
|-----------------|----------------------|-------------|
| Admin           | \`admin\`              | \`admin123\`  |
| Example Student | \`jane@student.com\`   | \`1234\`      |

✅ Students can also register using the registration page and create their own accounts.

---

## ✅ Feature Checklist

| Feature                                      | Status |
|----------------------------------------------|--------|
| Student Registration & Housing Application   | ✔️     |
| Student Login Functionality                  | ✔️     |
| Display Available Hostels and Room Listings  | ✔️     |
| Application Submission by Students           | ✔️     |
| Admin Login Functionality                    | ✔️     |
| Admin Approval/Rejection of Applications     | ✔️     |
| Room Management by Admin (Add/Delete Rooms)  | ✔️     |
| Dashboard Notifications to Students (via alerts) | ✔️     |
| Logout System for both Admins and Students   | ✔️     |

---

## 🛠️ Installation Instructions (Local Setup)

1. **Clone both repositories** to your local machine:
   \`\`\`bash
   git clone 
   git clone [your-backend-repo-link]
   \`\`\`

2. **Setup the Backend**:
   - Open the backend folder in your terminal.
   - Install dependencies:
     \`\`\`bash
     npm install
     \`\`\`
   - Start the backend server:
     \`\`\`bash
     node server.js
     \`\`\`
   - The server will run at \`http://localhost:5000\`

3. **Setup the Frontend**:
   - Open the frontend folder.
   - Use **Live Server** extension in VS Code (or open \`index.html\` manually in your browser).

4. **Testing**:
   - Register a student via the **Registration Page**.
   - Login using the student account or admin account.
   - Apply for hostel rooms.
   - As admin, manage rooms and applications.

---

# 📝 Important Notes
- Backend stores data inside JSON files (\`rooms.json\`, \`users.json\`, \`applications.json\`) instead of using a database.
- Notifications are **shown on the dashboard** (no real email integration).
- All code is file-based as per the assignment instructions.

---

# 🎯 Conclusion
All requirements from **Question 3** have been fully implemented and tested successfully.

---

# 📄 License
This project is free to use for academic purposes.

---

# 🚀 READY FOR SUBMISSION!
EOL

echo "✅ README.md created successfully!"
