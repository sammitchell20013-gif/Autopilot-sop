# 📁 Custom Folders Feature - Quick Guide

## ✅ What's New:

You can now **create unlimited custom folders** to organize your SOPs exactly the way you want!

---

## 🎯 How to Create a Custom Folder:

### **Option 1: When Creating a New SOP**

1. **Go to:** `/app/sops/create`
2. **Find the "Folder" dropdown**
3. **Select:** "➕ Create Custom Folder..."
4. **Type your custom folder name** (e.g., "Client Onboarding")
5. **Click "Save Folder"**
6. **Fill in the rest of your SOP details**
7. **Click "Create SOP"**

✅ Done! Your SOP is now in your custom folder!

---

### **Option 2: When Editing an Existing SOP**

1. **Open any SOP** → Click "Edit SOP"
2. **Find the "Folder" dropdown**
3. **Select:** "➕ Create Custom Folder..."
4. **Type your new folder name**
5. **Click "Save Folder"**
6. **Save the SOP**

✅ Done! Your SOP moved to the new custom folder!

---

## 📂 Your Folders Automatically Appear:

### **On the SOP Library Page:**

When you go to `/app/sops`, you'll see a **Folders Sidebar** on the left:

```
┌─────────────────────┐
│ Folders             │
├─────────────────────┤
│ 📄 All SOPs (12)    │ ← Shows all
│ ⭐ Favorites (3)    │ ← Shows favorites
├─────────────────────┤
│ 📁 General (5)      │ ← Default folder
│ 📁 Sales (2)        │ ← Default folder
│ 📁 Client Onboarding (3) │ ← YOUR CUSTOM FOLDER! ✅
│ 📁 Weekly Tasks (2) │ ← YOUR CUSTOM FOLDER! ✅
└─────────────────────┘
```

- **Click any folder** → See only SOPs in that folder
- **Numbers show** how many SOPs are in each folder
- **Custom folders appear automatically** as you create them
- **Sorted alphabetically**

---

## 🗂️ Example Custom Folders You Could Create:

### **For a Business:**
- "Client Onboarding"
- "Weekly Tasks"
- "Monthly Reports"
- "Emergency Procedures"
- "Training Videos"

### **For an Agency:**
- "Project Kickoff"
- "Deliverables"
- "Client Communication"
- "Internal Processes"

### **For E-commerce:**
- "Order Processing"
- "Returns & Refunds"
- "Inventory"
- "Shipping"

### **For Healthcare:**
- "Patient Intake"
- "Insurance"
- "Billing"
- "Appointment Scheduling"

**Create ANYTHING you need!** No limits! 🚀

---

## 💡 Tips:

### **Organizing Your SOPs:**

1. ✅ **Use clear names** - "Client Onboarding" not "CO"
2. ✅ **Keep it simple** - Don't create too many folders
3. ✅ **Group related tasks** - Put similar SOPs together
4. ✅ **Start broad** - Use default folders first, create custom as you grow

### **Default Folders (Still Available):**

You can still use these pre-made folders:
- General
- Customer Service
- Sales
- Marketing
- Operations
- HR
- Finance
- Technical

**OR** create your own custom folders!

---

## 🧪 Test It Now:

### **Quick Test Flow:**

1. **Create a test SOP:**
   ```
   http://localhost:3000/app/sops/create
   ```

2. **Select:** "➕ Create Custom Folder..."

3. **Type:** "Test Folder"

4. **Save it & Create the SOP**

5. **Go to SOP Library:**
   ```
   http://localhost:3000/app/sops
   ```

6. **Look at the left sidebar** → "Test Folder (1)" is there! ✅

7. **Click "Test Folder"** → See only your test SOP! ✅

---

## 🎨 How It Looks:

### **Creating Custom Folder:**

```
┌───────────────────────────────┐
│ Folder                        │
├───────────────────────────────┤
│ [Enter custom folder name...] │ ← Type here
│                               │
│ [Cancel]  [Save Folder]       │ ← Buttons
└───────────────────────────────┘
```

### **Dropdown:**

```
┌─────────────────────────────┐
│ General                     │
│ Customer Service            │
│ Sales                       │
│ Marketing                   │
│ Operations                  │
│ HR                          │
│ Finance                     │
│ Technical                   │
│ ➕ Create Custom Folder...  │ ← Click this!
└─────────────────────────────┘
```

---

## ⚙️ Behind the Scenes:

- **Folders stored** in the `sops` table as text
- **No limit** on how many you can create
- **Automatically appear** in the sidebar
- **Counted dynamically** (shows # of SOPs)
- **Sorted alphabetically**
- **Reusable** - Once created, shows up for future SOPs

---

## 🚀 Benefits:

- ✅ **Better organization** - Group SOPs your way
- ✅ **Unlimited flexibility** - Not limited to preset folders
- ✅ **Auto-updating** - Folders appear as you create them
- ✅ **Easy filtering** - Click a folder, see those SOPs
- ✅ **Team clarity** - Everyone sees the same organized structure

---

## 📝 Notes:

- **Case-sensitive** - "Sales" and "sales" are different folders
- **Unique names** - Each folder name should be unique
- **Move SOPs** - Edit SOP → Change folder
- **Can't delete folders** - Just stop using them (they'll disappear when empty)

---

## 🎉 You're All Set!

**Start organizing your SOPs with custom folders now!** 📁✨

Create folders that make sense for YOUR business!

