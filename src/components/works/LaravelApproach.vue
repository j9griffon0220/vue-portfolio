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
      要件定義から公開まで一貫して担当。ヒアリングを通じてサイトの目的（紹介＋お問い合わせ）と必要機能（Gmail通知付きフォーム）を明確化。
    </p>
    <p>
      -
      クライアントの好みに合わせた色味や雰囲気を反映し、安心感あるUI構成を設計。
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
    <p>
      - コントローラーでメール送信前後に
      ログ出力を設置し、送信フローの監視とデバッグを容易化。
    </p>
    <p>
      -
      メール送信処理には例外対応を実装し、PHPUnitによる単体・Featureテスト、Laravel
      DuskとPlaywrightによるE2Eテストを導入。フォーム機能の信頼性を多層的に検証しました。
    </p>
    <p>- フォームバリデーションに加え、honeypot によるスパム防止を実装。</p>
    <p>- 特定ルートに レート制限を設定し、過剰リクエストを防止。</p>
    <p>
      - デザインカンプは Photoshop
      で作成、CSSはメディアクエリを最小化し、デバイス非依存を意識。
    </p>
    <p>
      -
      公開前にはローカルトンネルを用いたフィードバックを得て、UI・文言の調整を実施しました。
    </p>
    <p>
      - GitHub を経由して Xserver 共用サーバーに手動デプロイ。SSH
      操作やシンボリックリンク設定、独自ドメイン紐付けまで対応。
    </p>
  </div>
</template>
