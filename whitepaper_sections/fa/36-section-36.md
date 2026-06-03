# سیگنال زنده — وایت‌پیپر
## بخش ۳۶: FounderVault.sol — آزادسازی و کمک‌هزینه‌های پیدایش

**نویسنده:** امیر احمدی (@x@) · **تاریخ:** ۱۳ خرداد ۱۴۰۵ · **وضعیت:** نهایی

---

### ۳۶.۱ هدف
`FounderVault.sol` برنامهٔ آزادسازی تخصیص‌های بنیان‌گذاران را مدیریت می‌کند و کمک‌هزینه‌های پیدایش برای تولدهای جدید را توزیع می‌نماید.

### ۳۶.۲ توابع اصلی
```solidity
function deposit(address _beneficiary, uint256 _amount) external onlyOwner;
function claim() external;
function grantBirth(address _newEntity) external onlyCouncil returns (uint256);
```

### ۳۶.۳ آزادسازی
تخصیص‌های بنیان‌گذاران به‌طور خطی در ۴ سال (۲۵٪ در سال) آزاد می‌شوند. توکن‌ها در طول دورهٔ آزادسازی سول‌باند هستند.