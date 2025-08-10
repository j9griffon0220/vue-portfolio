<!--  Worksページ・右側components LaravelのIntroタブ中身-->
<script setup></script>

<template>
  <!-- <h3
    class="font-ibm text-charcoal-gray mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] text-[calc(1.27rem+0.27vw)] leading-[1.4] font-medium"
  >
    サイト概要
  </h3> -->

  <a
    href="https://www.halunire-counselingroom.com/"
    target="_blank"
    rel="noopener noreferrer"
    area-label="ハルニレ カウンセリングルームのサイトを新しいタブで開く"
  >
    <h4
      class="font-ibm text-charcoal-gray hover:bg-charcoal-gray/5 mb-[clamp(1rem,1rem+0vw,1rem)] px-4 py-2 text-[calc(1.05rem+0.25vw)] leading-[1.5] font-medium transition-colors duration-200 ease-in-out"
    >
      「ハルニレ カウンセリングルーム」
    </h4>
    <!-- スクリーンショット画像 imgタグ -->
    <div
      class="border-charcoal-gray/20 hover:border-charcoal-gray/70 relative mb-[clamp(1.56rem,1.56rem+0.25vw,1.95rem)] aspect-[16/9] h-auto w-full border-[.1rem] shadow-md transition duration-200"
    >
      <img
        class="object-cover"
        src="/counselingroom@1x.webp"
        srcset="/counselingroom@1x.webp 1x, /counselingroom@2x.webp 2x"
        alt="サイトスクリーンショット"
      />
      <!-- 白オーバーレイ -->
      <div
        class="bg-nuance-gray/40 absolute inset-0 opacity-0 transition duration-200 hover:opacity-100"
      ></div>
    </div>
  </a>

  <div
    class="font-ibm text-soft-gray space-y-[clamp(1.25rem,1.25rem+0.20vw,1.56rem)] text-[calc(0.9rem+0.25vw)] leading-[1.5] font-normal whitespace-normal"
  >
    <p>
      個人開業のカウンセラーの方向けに、紹介とお問い合わせ機能を備えたWebサイトをLaravelで個人開発しました。
    </p>
    <p>
      お問い合わせを受けられるようフォームを設置し、送信内容がクライアントの
      Gmailアカウントへ直接届く仕組みを導入。シンプルで使いやすい問い合わせフローを実現しています。
    </p>
    <p>
      またフレームワークの構造理解を深めることも目的とし、
      Laravelのルーティング、メール送信処理、環境変数の設定などを実践的に経験しました。
    </p>
  </div>
</template>
