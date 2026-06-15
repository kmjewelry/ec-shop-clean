export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">
        利用規約
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            第1条（適用）
          </h2>
          <p>
            本規約は、KM Jewelryが提供するサービスの
            利用条件を定めるものです。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            第2条（禁止事項）
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>法令に違反する行為</li>
            <li>第三者の権利を侵害する行為</li>
            <li>サービス運営を妨害する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            第3条（商品の購入）
          </h2>
          <p>
            お客様は当サイトの定める方法により
            商品を購入することができます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            第4条（返品・交換）
          </h2>
          <p>
            商品不良を除き、
            お客様都合による返品・交換は
            お受けできません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            第5条（免責事項）
          </h2>
          <p>
            当サイトは、サービス提供の中断、
            システム障害等により生じた損害について、
            当社に故意または重過失がある場合を除き
            責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            第6条（規約の変更）
          </h2>
          <p>
            本規約は予告なく変更される場合があります。
          </p>
        </section>
      </div>
    </main>
  );
}
