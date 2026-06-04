import random
import statistics

# ۱. تنظیمات اولیه
WEEKLY_POOL = 3_846_153_846_153_846  # TAP (Genesis epoch)
NUM_MEMBERS = 50

# ۲. تولید Loyalty Scoreهای تصادفی برای ۵۰ عضو
random.seed(14030605)  # تاریخ امروز
loyalty_scores = [random.randint(0, 100) for _ in range(NUM_MEMBERS)]
total_loyalty = sum(loyalty_scores)

print("=" * 60)
print("📊 شبیه‌سازی توزیع هفتگی TAP — The Living Signal")
print("=" * 60)
print(f"👥 تعداد اعضای فعال: {NUM_MEMBERS}")
print(f"💰 استخر هفتگی: {WEEKLY_POOL:,} TAP")
print(f"⭐ مجموع امتیاز وفاداری: {total_loyalty}")
print()

# ۳. محاسبه سهم هر عضو
rewards = []
for i, score in enumerate(loyalty_scores):
    reward = (score / total_loyalty) * WEEKLY_POOL if score > 0 else 0
    rewards.append(reward)
    if i < 5:  # فقط ۵ نفر اول را نمایش بده
        percentage = (score / total_loyalty) * 100
        print(f"👤 عضو {i+1}: Score={score} | سهم={percentage:.2f}% | پاداش={reward:,.0f} TAP")

print("...")
print()

# ۴. خلاصه آماری
print("📈 خلاصه آماری:")
print(f"   ➤ میانگین پاداش: {statistics.mean(rewards):,.0f} TAP")
print(f"   ➤ میانه پاداش: {statistics.median(rewards):,.0f} TAP")
print(f"   ➤ بیشترین پاداش: {max(rewards):,.0f} TAP")
print(f"   ➤ کمترین پاداش: {min(rewards):,.0f} TAP")

# ۵. بررسی: عضو با امتیاز صفر
zero_score_count = loyalty_scores.count(0)
print(f"\n⚠️  اعضای با امتیاز صفر: {zero_score_count} نفر (پاداش = 0)")
print(f"✅ فرمول Proof of Resonance با موفقیت اجرا شد.")
