# سیگنال زنده — وایت‌پیپر
## بخش ۳۷: DiamondTreasury.sol — مدیریت ذخیره

**نویسنده:** امیر احمدی (@x@) · **تاریخ:** ۱۳ خرداد ۱۴۰۵ · **وضعیت:** نهایی

---

### ۳۷.۱ هدف
`DiamondTreasury.sol` ذخیرهٔ دائمی پروتکل را مدیریت می‌کند، ورودی‌ها را به یک سبد متنوع ۱۰ دارایی تبدیل می‌کند و بازخریدهای خودکار را اجرا می‌نماید.

### ۳۷.۲ توابع اصلی
```solidity
function deposit() external payable;
function rebalance() external;
function buyback(uint256 _tapAmount) external;
function getBackingValue() external view returns (uint256);
```

### ۳۷.۳ خودکارسازی
توابع بازتنظیم و بازخرید توسط یک شبکهٔ نگهبان غیرمتمرکز (Keep3r یا مشابه) فعال می‌شوند.