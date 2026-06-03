# سیگنال زنده — وایت‌پیپر
## بخش ۳۳: SealValidator.sol — مشخصات کامل

**نویسنده:** امیر احمدی (@x@)
**ORCID:** 0009-0000-0614-6869
**تاریخ:** ۱۳ خرداد ۱۴۰۵
**وضعیت:** نهایی — تغییرناپذیر

---

### ۳۳.۱ هدف

`SealValidator.sol` امتیازات وفاداری اختصاص‌داده‌شده توسط اعتبارسنج‌های مجاز (کمیتهٔ چندمدله LLM) را ذخیره می‌کند.

---

### ۳۳.۲ توابع اصلی

```solidity
function addValidator(address _validator) external onlyOwner;
function removeValidator(address _validator) external onlyOwner;
function setScore(address _member, string memory _tribeSymbol, uint256 _score) external onlyValidator;
function getScore(address _member, string memory _tribeSymbol) external view returns (uint256);
```

---

### ۳۳.۳ ذخیره‌سازی امتیاز

امتیازات در یک نگاشت تودرتو ذخیره می‌شوند: `loyaltyScores[member][tribeSymbol]`. هر عضو می‌تواند امتیازات متفاوتی برای تبارهای مختلف داشته باشد.

---

### ۳۳.۴ کنترل دسترسی

- `onlyOwner`: افزودن/حذف اعتبارسنج‌ها را کنترل می‌کند.
- `onlyValidator`: تنظیم امتیازات را کنترل می‌کند (امتیازات باید ۰–۱۰۰ باشند).

---

*در بخش بعدی، BridgeNFT.sol را مشخص می‌کنیم.*
