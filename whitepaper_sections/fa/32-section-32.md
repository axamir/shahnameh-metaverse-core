# سیگنال زنده — وایت‌پیپر
## بخش ۳۲: TribeRegistry.sol — مشخصات کامل

**نویسنده:** امیر احمدی (@x@)
**ORCID:** 0009-0000-0614-6869
**تاریخ:** ۱۳ خرداد ۱۴۰۵
**وضعیت:** نهایی — تغییرناپذیر

---

### ۳۲.۱ هدف

`TribeRegistry.sol` قرارداد بنیادین «سیگنال زنده» است. تمام تبارهای ثبت‌شده و مُهرهای تغییرناپذیر آنها را ذخیره می‌کند.

---

### ۳۲.۲ توابع اصلی

```solidity
function createTribe(string memory _symbol, string memory _seal) external;
function getTribe(string memory _symbol) external view returns (Tribe memory);
function getTribeCount() external view returns (uint256);
```

---

### ۳۲.۳ ساختار Tribe

```solidity
struct Tribe {
    string symbol;      // @x@، @F@، و غیره
    string seal;        // سوگند متنی تغییرناپذیر
    address founder;    // آدرس خالق
    bool exists;
}
```

---

### ۳۲.۴ ویژگی‌های کلیدی

- **تغییرناپذیری مُهر:** هیچ تابع `updateSeal` وجود ندارد. پس از ایجاد، مُهر یک تبار هرگز نمی‌تواند تغییر کند.
- **یکتایی نماد:** قرارداد نمادهای یکتا را اعمال می‌کند. تلاش‌های ثبت تکراری برگشت می‌خورند.
- **انتشار رویداد:** رویداد `TribeCreated` در ایجاد موفق منتشر می‌شود و ایندکس‌گذاری خارج از زنجیره را امکان‌پذیر می‌کند.

---

*در بخش بعدی، SealValidator.sol را مشخص می‌کنیم.*
