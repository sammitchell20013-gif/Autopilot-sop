# 📊 Autopilot SOP - Data Storage Summary

> **For Internal Reference & Privacy Policy Creation**

---

## 🗄️ What Data We Store

### **1. User Account Data**
**Table:** `profiles`
**Location:** Supabase PostgreSQL Database (US-based servers)
**Retention:** Stored until account deletion

**Data Collected:**
- User ID (UUID)
- Email address
- Full name
- Company name (optional)
- Avatar URL (optional)
- Account creation date

---

### **2. Authentication Data**
**Table:** `auth.users` (Supabase managed)
**Location:** Supabase PostgreSQL Database
**Retention:** Stored until account deletion

**Data Collected:**
- Email address
- Encrypted password (hashed with bcrypt)
- OAuth tokens (if using Google login)
- Last sign-in timestamp
- Email confirmation status
- Password reset tokens (temporary, expire after 1 hour)

---

### **3. SOP Content Data**
**Table:** `sops`
**Location:** Supabase PostgreSQL Database
**Retention:** Stored until user deletes SOP or account

**Data Collected:**
- SOP ID (UUID)
- User ID (owner)
- Title
- Description
- Folder name
- Tags (array)
- Video URL (link to storage)
- Thumbnail URL (link to storage)
- Steps (JSON - includes step titles, descriptions, tips, warnings)
- Favorite status
- Status (draft/published)
- Created date
- Updated date

---

### **4. Video Files**
**Storage:** Supabase Storage Bucket (`videos`)
**Location:** Supabase Storage (US-based servers)
**Retention:** Stored until user deletes SOP or account
**Max File Size:** 100MB per video

**Data Stored:**
- Original video files (MP4, MOV, AVI, etc.)
- Image files (screenshots, thumbnails)
- Organized by User ID folders: `{userId}/{timestamp}.{ext}`

**Storage Path Structure:**
```
videos/
├── {user-id-1}/
│   ├── 1234567890.mp4
│   ├── 1234567891.mp4
│   └── images/
│       └── 1234567892.png
├── {user-id-2}/
│   └── ...
```

---

### **5. AI Processing Data (Temporary)**
**Processor:** OpenAI API
**Location:** OpenAI servers (US-based)
**Retention:** **30 days** by OpenAI, then automatically deleted

**Data Processed:**
- Video audio transcription (via Whisper API)
- Transcript text (for SOP generation via GPT-4)
- Custom prompt instructions (if provided by user)

**Important:** 
- OpenAI stores API data for 30 days for abuse monitoring
- After 30 days, all data is permanently deleted
- We do NOT send OpenAI any user personal information (names, emails, etc.)
- We only send: video audio and transcript text

---

### **6. Task Data**
**Table:** `tasks`
**Location:** Supabase PostgreSQL Database
**Retention:** Stored until user deletes task or account

**Data Collected:**
- Task ID (UUID)
- SOP ID (reference)
- User ID (owner)
- Title
- Assigned to (name)
- Assigned to email
- Due date
- Status (pending/in-progress/completed)
- Priority (low/medium/high)
- Notes
- Created date
- Completed date

---

### **7. Team Member Data**
**Table:** `team_members`
**Location:** Supabase PostgreSQL Database
**Retention:** Stored until removed by inviter or account deletion

**Data Collected:**
- Team member ID (UUID)
- Inviter user ID
- Email address of invitee
- Name
- Role (viewer/editor/owner)
- Avatar URL (optional)
- Invited date
- Accepted date

---

### **8. Subscription Data (Future)**
**Table:** `subscriptions` (not yet created)
**Location:** Supabase PostgreSQL Database
**Payment Processing:** Stripe (PCI-compliant)
**Retention:** Stored for 7 years (tax/legal requirements)

**Data Collected:**
- Subscription ID
- User ID
- Plan (starter/pro/enterprise)
- Status (active/canceled/past_due)
- Stripe customer ID
- Current period start/end
- Cancel date (if applicable)

**Payment Data (stored by Stripe, NOT by us):**
- Credit card numbers
- Billing addresses
- Payment history

---

## 🔐 Security Measures

### **Row Level Security (RLS)**
- Enabled on all tables
- Users can ONLY access their own data
- Enforced at database level (cannot be bypassed)

### **Encryption**
- **In Transit:** All data encrypted with TLS/SSL (HTTPS)
- **At Rest:** Database encrypted with AES-256 by Supabase
- **Passwords:** Hashed with bcrypt (industry standard)

### **Access Control**
- Service role keys stored as environment variables
- Never exposed to client
- API keys rotated regularly

---

## 🗑️ Data Deletion

### **User Deletion:**
When a user deletes their account:
1. Profile deleted immediately
2. All SOPs deleted immediately
3. All tasks deleted immediately
4. All team member records deleted immediately
5. All video files deleted from storage immediately
6. Database entries permanently removed (not soft-deleted)
7. Cannot be recovered after deletion

### **Cascade Deletion:**
- Deleting a user → Deletes all their SOPs, tasks, videos, team invites
- Deleting a SOP → Deletes associated tasks
- Enforced by database foreign key constraints

---

## ⏰ Data Retention Periods

| Data Type | Retention Period | Location |
|-----------|-----------------|----------|
| User profiles | Until account deletion | Supabase Database |
| SOPs | Until user deletes or account deletion | Supabase Database |
| Videos | Until user deletes SOP or account | Supabase Storage |
| Tasks | Until user deletes or account deletion | Supabase Database |
| Team invites | Until removed or account deletion | Supabase Database |
| AI transcripts | 30 days (OpenAI policy) | OpenAI servers |
| Authentication logs | 90 days | Supabase |
| Billing records | 7 years (tax law) | Stripe + Database |

---

## 🌍 Data Location

- **Primary Database:** Supabase (AWS US-East-2, Ohio)
- **File Storage:** Supabase Storage (AWS US-East-2, Ohio)
- **AI Processing:** OpenAI API (US-based servers)
- **Payment Processing:** Stripe (global, PCI-DSS Level 1 compliant)

---

## 📧 Contact for Data Requests

Users can request:
- **Data export** (download all their data)
- **Data deletion** (delete account and all data)
- **Data correction** (update incorrect information)

Contact: [Add your support email]
Response time: Within 30 days (GDPR/CCPA compliant)

---

## 🔄 Updates to Data Practices

Last Updated: January 2026

We will notify users via email of any material changes to data storage practices.

---

**This document is for internal reference to create accurate Privacy Policy and Terms of Service.**

