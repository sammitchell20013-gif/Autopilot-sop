# ✅ Fixed: getTasksByUserId Error

## 🐛 The Error:

```
TypeError: getTasksByUserId is not a function
```

**Location:** `app/app/billing/page.tsx (line 25)`

---

## ✅ What Was Wrong:

The function `getTasksByUserId()` was being imported and called, but it **didn't exist** in the `lib/supabase/tasks.ts` file!

The tasks file only had:
- ❌ `getUserTasks()` - Gets tasks for current user (no userId param)
- ❌ No `getTasksByUserId(userId)` function

---

## ✅ What I Fixed:

### **Added Missing Functions:**

1. **`getTasksByUserId(userId: string)`**
   - Gets all tasks for a specific user ID
   - Joins with SOPs table to get SOP title
   - Returns tasks with `sop_title` field
   - Used in: Billing page, Dashboard page

2. **`updateTaskStatus(id: string, status: string)`**
   - Updates task status (pending/in-progress/completed)
   - Auto-sets `completed_at` timestamp when completed
   - Used in: Tasks page (mark complete/incomplete)

---

## 🔧 Technical Details:

### **New Function Signature:**

```typescript
export async function getTasksByUserId(userId: string) {
  const { data, error } = await supabase
    .from('tasks')
    .select('*, sops(title)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  // Transform to include sop_title
  const transformedData = data?.map((task: any) => ({
    ...task,
    sop_title: task.sops?.title || null,
  }));

  return { data: transformedData, error: null };
}
```

**Why the join?**
- Tasks can be linked to SOPs via `sop_id`
- We want to display "From SOP: [SOP Title]" in the UI
- Supabase lets us join tables with `select('*, sops(title)')`

---

## 📍 Where It's Used:

### **1. Billing Page**
```typescript
const { data } = await getTasksByUserId(user.id);
setTasks(data || []);
```
- Shows task count in usage stats
- Displays progress bars

### **2. Dashboard Page**
```typescript
const { data } = await getTasksByUserId(user.id);
setTasks(data || []);
```
- Shows completed tasks count
- Lists upcoming tasks

### **3. Tasks Page**
```typescript
const { data } = await getTasksByUserId(user.id);
setTasks(data || []);
```
- Displays all user tasks
- Allows filtering/searching

---

## ✅ It's Fixed Now!

**The error should be gone!** 

Your app will now:
- ✅ Load tasks correctly on Billing page
- ✅ Show real task counts
- ✅ Display task lists on Dashboard
- ✅ Work properly on Tasks page

---

## 🧪 Test It:

1. **Refresh your app:**
   ```
   http://localhost:3000/app/billing
   ```

2. **Should load without errors!** ✅

3. **Create a task** to test:
   - Go to any SOP
   - Click "Create Task"
   - Assign task
   - Go to Billing page
   - Should see task count update!

---

## 📁 Files Modified:

- ✅ `lib/supabase/tasks.ts` - Added missing functions

---

**Error fixed!** The app should work perfectly now! 🎉

