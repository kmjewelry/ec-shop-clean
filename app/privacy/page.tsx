export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">
        プライバシーポリシー
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            個人情報の取得
          </h2>
          <p>
            KM Jewelryは、商品の購入、お問い合わせ等の際に、
            お客様のお名前、住所、電話番号、
            メールアドレス等の個人情報を取得する場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            利用目的
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>商品の発送</li>
            <li>注文内容の確認</li>
            <li>お問い合わせ対応</li>
            <li>サービス向上のための分析</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            第三者提供
          </h2>
          <p>
            法令に基づく場合を除き、
            お客様の同意なく第三者へ個人情報を
            提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            決済について
          </h2>
          <p>
            当サイトの決済はStripeを利用しています。
            クレジットカード情報は当サイトで保持せず、
            Stripeによって安全に処理されます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Cookieについて
          </h2>
          <p>
            サイトの利便性向上のため、
            Cookieを使用する場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            お問い合わせ
          </h2>
          <p>kmjewelryjp@gmail.com</p>
        </section>
      </div>
    </main>
  );
}
