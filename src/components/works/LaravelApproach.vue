<!--  Worksページ・右側components LaravelのApproachタブ中身-->
<script setup></script>

<template>
  <h3
    class="font-ibm text-charcoal-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] text-[calc(1.2rem+0.27vw)] leading-[1.4] font-medium"
  >
    開発アプローチ
  </h3>

  <h4
    class="font-ibm text-charcoal-gray mb-[clamp(1rem,1rem+0vw,1rem)] text-[calc(1.05rem+0.25vw)] leading-[1.5] font-medium"
  >
    1. 課題の把握と要件定義
  </h4>
  <div
    class="font-ibm text-soft-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
  >
    <p>
      -
      ヒアリングを通じてサイトの目的（紹介＋お問い合わせ）と必要機能（Gmail通知付きフォーム）を明確化。
    </p>
    <p>
      -
      クライアントの好みに合わせた色味や雰囲気を反映し、安心感ある構成を目指しました。
    </p>
  </div>

  <h4
    class="font-ibm text-charcoal-gray mb-[clamp(1rem,1rem+0vw,1rem)] text-[calc(1.05rem+0.25vw)] leading-[1.5] font-medium"
  >
    2. 技術選定と理由
  </h4>
  <div
    class="font-ibm text-soft-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
  >
    <p>
      - フォーム処理やルーティングに強みを持つ
      Laravelを採用。Docker環境はLaravel Sailを用いて構築。
    </p>
    <p>
      -
      WordPressの導入も検討しましたが、セキュリティや管理面の理由から今回は見送りました。
    </p>
  </div>

  <h4
    class="font-ibm text-charcoal-gray mb-[clamp(1rem,1rem+0vw,1rem)] text-[calc(1.05rem+0.25vw)] leading-[1.5] font-medium"
  >
    3. 設計・実装の工夫
  </h4>
  <div
    class="font-ibm text-soft-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
  >
    <p>- 要件定義から公開まで一貫して担当。</p>
    <p>
      -
      デザインカンプをPhotoshopで作成、CSSはメディアクエリの使用を抑え、デバイス非依存を意識。
    </p>
    <p>
      -
      メール送信処理には例外対応とテストコードを導入し、バリデーションやhoneypotによるスパム対策も強化。
    </p>
    <p>
      -
      公開前にはローカルトンネルを用いたフィードバックを得て、UI・文言の調整を実施しました。
    </p>
  </div>
</template>
