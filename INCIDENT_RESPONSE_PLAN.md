# 🚨 Incident Response Plan - Autopilot SOP

> **Critical:** Keep this document updated and accessible 24/7

---

## 📞 Emergency Contacts

### **Primary Contact (Owner/Admin):**
- **Name**: [YOUR NAME]
- **Phone**: [YOUR PHONE]
- **Email**: [YOUR EMAIL]

### **Technical Support:**
- **Supabase Support**: https://supabase.com/dashboard/support
- **Netlify Support**: https://www.netlify.com/support/
- **OpenAI Support**: https://help.openai.com/

### **Legal Counsel (If Breach Occurs):**
- **Lawyer Name**: [TBD - hire when you have customers]
- **Firm**: [TBD]
- **Phone**: [TBD]

### **Cyber Insurance (If You Have It):**
- **Provider**: [TBD]
- **Policy Number**: [TBD]
- **Claims Phone**: [TBD]

---

## 🔴 WHAT COUNTS AS A "BREACH"?

A security incident requiring this plan includes:

✅ **Unauthorized access** to user data (emails, passwords, SOPs, videos)  
✅ **Data leak/exposure** (database misconfiguration, public bucket)  
✅ **Account takeover** (attacker gains access to user accounts)  
✅ **Ransomware/malware** on infrastructure  
✅ **DDoS attack** causing prolonged outage (4+ hours)  
✅ **Third-party breach** (Supabase, OpenAI, Netlify) affecting your users  

❌ **NOT a breach:** Individual user forgets password, phishing email sent to users (not from your system), minor bugs with no data exposure

---

## ⏱️ IMMEDIATE RESPONSE (First 2 Hours)

### **Step 1: STOP THE BREACH (Within 15 Minutes)**

1. **If database is exposed:**
   - Go to Supabase Dashboard → Settings → API
   - **Rotate the anon key immediately** (generates new key)
   - Update `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Netlify
   - Redeploy site

2. **If storage bucket is public:**
   - Go to Supabase Dashboard → Storage → `videos`
   - Make bucket **private**
   - Enable RLS on storage

3. **If specific user account is compromised:**
   - Go to Supabase Dashboard → Authentication → Users
   - Find user by email
   - Click "..." → **Sign out all sessions**
   - Click "..." → **Reset password**

4. **If admin access is compromised:**
   - Change all passwords (Supabase, Netlify, GitHub, Stripe, OpenAI)
   - Revoke all API keys
   - Enable 2FA everywhere

### **Step 2: ASSESS THE DAMAGE (Within 1 Hour)**

Answer these questions:

1. **What data was accessed?**
   - [ ] User emails
   - [ ] User passwords (hashed)
   - [ ] User names/companies
   - [ ] SOP content
   - [ ] Video files
   - [ ] Payment info (note: stored by Stripe, not you)

2. **How many users affected?**
   - [ ] 1-10 users
   - [ ] 10-100 users
   - [ ] 100-1,000 users
   - [ ] 1,000+ users (Ohio AG notification required!)

3. **How did it happen?**
   - [ ] Misconfigured RLS
   - [ ] Exposed API key
   - [ ] SQL injection
   - [ ] Phishing attack on admin
   - [ ] Third-party breach
   - [ ] Unknown

4. **When did it happen?**
   - Start time: ___________
   - Discovery time: ___________
   - Duration: ___________

### **Step 3: DOCUMENT EVERYTHING (Immediately)**

Create a log file: `incident-log-[DATE].txt`

```
INCIDENT LOG
Date: [DATE]
Time discovered: [TIME]
Discovered by: [YOUR NAME]

TIMELINE:
- [TIME]: Incident first occurred (if known)
- [TIME]: Incident discovered
- [TIME]: [Action taken]
- [TIME]: [Action taken]

AFFECTED DATA:
- [List what was exposed]

AFFECTED USERS:
- Total count: [NUMBER]
- User IDs: [If small number, list them]

ROOT CAUSE:
- [What caused it]

ACTIONS TAKEN:
- [List every action]
```

**Save this log.** You'll need it for legal compliance.

---

## 📧 USER NOTIFICATION (Within 72 Hours - Ohio Law)

### **When to Notify Users:**

You **MUST** notify users if:
- Their **personal information** was accessed (email, name, company, passwords)
- Their **SOP content or videos** were accessed by unauthorized parties

You DON'T need to notify if:
- Data was encrypted and key was not compromised
- Only metadata was accessed (login timestamps, IP addresses)

### **Email Template:**

**Subject:** Important Security Notice - Autopilot SOP

---

Dear [User Name],

We are writing to inform you of a security incident that may have affected your Autopilot SOP account.

**What Happened:**
On [DATE], we discovered [brief description of incident]. We immediately took action to secure our systems and stop the incident.

**What Information Was Involved:**
The incident may have affected the following information:
- [List: email, name, SOP content, etc.]

**What We Are Doing:**
- We have [actions taken to fix]
- We have [security improvements made]
- We are monitoring systems closely

**What You Should Do:**
1. **Reset your password** immediately via [link]
2. **Review your account** for any unauthorized activity
3. **Enable two-factor authentication** (if available)
4. **Be alert for phishing emails** - we will never ask for your password via email

**Your Rights:**
You have the right to:
- Access a copy of your data
- Request deletion of your data
- File a complaint with the Ohio Attorney General

**Contact Us:**
If you have questions, contact us at:
- Email: support@autopilotsop.com
- Phone: [YOUR PHONE]

We sincerely apologize for this incident and are committed to protecting your information.

Sincerely,
[YOUR NAME]
Autopilot SOP

---

**Legal Notices:**
This notice is provided in compliance with Ohio Revised Code § 1349.19.

---

### **Send Method:**
- Email to ALL affected users
- Post notice on website (temporary banner)
- Post on social media (if applicable)

---

## 🏛️ REGULATORY NOTIFICATION (Within 72 Hours - Ohio Law)

### **Ohio Attorney General Notification (If 1,000+ Ohioans Affected):**

**Contact Info:**
- **Ohio AG Consumer Protection**: https://www.ohioattorneygeneral.gov/Business/Services-for-Business/Certified-Mail
- **Email**: consumer@ohioattorneygeneral.gov
- **Phone**: 1-800-282-0515

**What to Send:**
- Copy of user notification email
- Incident log
- Number of affected Ohio residents
- Description of incident
- Actions taken

### **Consumer Reporting Agencies (If Required):**

If incident involves SSNs or financial info (unlikely for you):
- Equifax: https://www.equifax.com/business/data-breach/
- Experian: https://www.experian.com/data-breach/
- TransUnion: https://www.transunion.com/business/data-breach

### **Law Enforcement (If Criminal Activity):**

- **FBI Cyber Division**: https://www.fbi.gov/investigate/cyber
- **Local Police**: [Your local PD number]

---

## 🔧 POST-INCIDENT ACTIONS (Within 30 Days)

### **1. Root Cause Analysis**

Write a report answering:
- What happened?
- Why did it happen?
- How was it discovered?
- What could have prevented it?

### **2. Security Improvements**

Implement:
- [ ] Additional monitoring (Supabase logs, alerts)
- [ ] Stricter RLS policies
- [ ] API key rotation schedule (quarterly)
- [ ] Security audit (hire professional)
- [ ] Penetration testing
- [ ] Bug bounty program (optional)

### **3. Update This Plan**

- [ ] Update contact info
- [ ] Add lessons learned
- [ ] Test the plan (practice drill)

### **4. Consider Insurance**

If you don't have cyber insurance, GET IT NOW.
- Providers: Coalition, Hiscox, Embroker
- Cost: ~$500-2,000/year
- Covers: Legal fees, notification costs, fines, lawsuits

---

## 📋 PREVENTION CHECKLIST (Do This Quarterly)

- [ ] Review RLS policies in Supabase
- [ ] Check for public storage buckets
- [ ] Rotate API keys
- [ ] Review user access logs
- [ ] Update all passwords
- [ ] Enable 2FA on all accounts
- [ ] Check for Supabase security advisories
- [ ] Run security scan (Snyk, npm audit)
- [ ] Test account deletion (GDPR compliance)
- [ ] Test data export (GDPR compliance)
- [ ] Review this incident plan

---

## 🚀 TESTING THIS PLAN

**Practice Drill (Do This Twice a Year):**

1. Set a 1-hour timer
2. Simulate a breach scenario
3. Follow the steps in this plan
4. Time how long each step takes
5. Identify gaps or slow points
6. Update the plan

**Scenarios to Practice:**
- Database exposed
- User account takeover
- Phishing attack on admin
- Supabase outage

---

## 📞 WHO TO CALL WHEN (Quick Reference)

| Situation | Who to Call | When |
|-----------|-------------|------|
| Data exposed | Supabase support | Immediately |
| 1,000+ Ohioans affected | Ohio AG | Within 72 hours |
| Criminal activity | FBI Cyber | Immediately |
| Legal questions | Your lawyer | Within 24 hours |
| Insurance claim | Cyber insurer | Within 24 hours |
| User questions | Support email | Ongoing |

---

## ✅ FINAL CHECKLIST

After an incident, have you:
- [ ] Stopped the breach
- [ ] Documented everything
- [ ] Notified affected users (within 72 hours)
- [ ] Notified Ohio AG (if 1,000+ affected)
- [ ] Notified law enforcement (if criminal)
- [ ] Preserved evidence
- [ ] Contacted lawyer
- [ ] Filed insurance claim
- [ ] Implemented fixes
- [ ] Updated this plan
- [ ] Learned lessons

---

**Last Updated:** [DATE]  
**Next Review Due:** [3 MONTHS FROM NOW]

---

**Remember:** It's not "if" a breach happens, it's "when." Being prepared makes all the difference.

**Store this document somewhere safe and accessible 24/7.**

