# خطة تحسين المشروع

## 🔐 الجزء الأمني (Security Best Practices)

### حماية الخادم (API Server)
- [x] إضافة `helmet` و `express-rate-limit` كحزم
- [x] إضافة `helmet()` في `app.ts` (رؤوس أمان)
- [x] إضافة `app.set('trust proxy', 1)` (خلف Vercel/Proxy)
- [x] Rate limiter عام في `app.ts`
- [x] Rate limiter خاص في `routes/contact.ts` (مثلاً 5/15 دقيقة)
- [x] إضافة حقل Honeypot في الخادم (يتم رفض الطلب إذا مُلئ)
- [x] Sanitization: trim + إزالة أحرف التحكم (control chars)
- [x] التحقق من طول/صيغة المدخلات عبر zod (موجود جزئيًا)

### حماية الواجهة (Portfolio Frontend)
- [x] إضافة حقل Honeypot مخفي في `Contact.tsx`
- [x] حد زمني: نموذج مملوء بأقل من ثانيتين = بوت
- [x] تعطيل الزر مؤقتًا بعد الإرسال (anti-spam)
- [x] استخدام الترجمة `t.contact.*` بدلاً من النصوص الثابتة
- [x] إزالة مفاتيح `VITE_EMAILJS_*` من `env.d.ts` (المسار الآمن هو Backend API)
- [x] إزالة `@emailjs/browser` غير المستخدم من الحزم

### إدارة الأسرار (Environment & Secrets)
- [x] إنشاء `.env.example` (متغيرات بدون قيم حقيقية)
- [x] تقوية `.gitignore` (استثناء `.env.example` فقط)

### رؤوس الأمان على الاستضافة (Vercel)
- [x] إضافة رؤوس أمان في `vercel.json`: CSP, X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy

### التحقق النهائي
- [x] `pnpm run typecheck`
- [x] `pnpm run build`
- [x] اختبار `POST /api/contact`

## 📧 تكامل Gmail (تسليم رسائل النموذج إلى البريد)

### تنفيذ خادم البريد (API Server)
- [x] إنشاء `src/lib/email.ts` باستخدام `nodemailer` لإرسال الرسائل عبر Gmail SMTP
- [x] دعم متغيرات البيئة: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_SECURE`, `MAIL_TO`
- [x] استخدام App Password (آمن) بدلاً من كلمة مرور Gmail العادية
- [x] حماية HTML من XSS عبر `escapeHtml` عند بناء قالب البريد
- [x] إضافة `replyTo` لبريد المرسل حتى يمكن الرد مباشرة
- [x] ربط `sendContactEmail` بمسار `POST /api/contact` (best-effort: لا يمنع حفظ الرسالة عند فشل SMTP)
- [x] نقل `nodemailer` إلى `dependencies` (كان في `devDependencies` خطأً)
- [x] إصلاح سكربت `dev` ليعمل على Windows باستخدام `cross-env` (بدلاً من `export`)

### التوثيق
- [x] إضافة متغيرات SMTP/Gmail إلى `.env.example` مع تعليمات App Password

### التحقق
- [x] `pnpm run typecheck` (api-server)
- [x] `pnpm run build` (api-server)
- [x] تأكيد تثبيت `cross-env` و `nodemailer`



