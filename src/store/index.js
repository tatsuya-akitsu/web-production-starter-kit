import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoading: false,
      isLoggined: false,
      order: {
        status: 'create', // 案件ステータス
        clientName: '', // クライアント名
        repName: '',  // 担当者名
        projectName: '',  // プロジェクト名
        deliveryMethod: '', // 納品方法
        deliveryDate: '', // 納品希望日
        hopeTime: '通常', // 希望制作期間
        hopeTimeDetail: '', // 希望制作期間詳細
        siteName: '', // サイト名
        siteDescription: '',  // サイトディスクリプション
        ogpText: '',  // OGPテキスト
        productionPurpose: [],  // 制作目的
        orderRange: [], // 依頼範囲
        age: [20, 40],  // 年齢層
        gender: '男性', //  性別
        employment: [
          { val: '正社員' },
          { val: '契約社員' },
          { val: '派遣社員' },
          { val: 'フリーランス' },
          { val: 'パート・アルバイト' },
          { val: '大学生' },
          { val: '高校生' },
          { val: '主婦' }
        ], // 職業
        checkedEmployment: [],  // チェック済み職業
        isEmployIndeterminate: true,  // 全ての職業チェック
        checkAllEmployment: false,  // 職業を全てチェック
        jobCategory: [
          { val: '営業系' },
          { val: '企画・事務・管理系' },
          { val: '販売・接客・サービス系' },
          { val: '専門サービス系（医療・福祉・教育・その他）' },
          { val: '専門職系（コンサルタント・金融・不動産）' },
          { val: 'クリエイティブ系' },
          { val: '技術系（IT・WEB・ゲーム・通信）' },
          { val: '技術系（電気・電子・機械）' },
          { val: '技術系（建築・土木）' },
          { val: '技術系（医療・化学・素材・食品）' },
          { val: '警備・清掃・設備管理・運輸・配送・軽作業系' },
          { val: '公務員・団体職員・その他' }
        ],  // 職種
        checkedJobCategory: [], // チェック済み職種
        isJobCategoryIndeterminate: true, // 全ての職種チェック
        checkAllJobCategory: false, // 職種を全てチェック
        local: [
          { area: '北海道地方' },
          { area: '東北地方' },
          { area: '関東地方' },
          { area: '中部地方' },
          { area: '近畿地方' },
          { area: '中国地方' },
          { area: '四国地方' },
          { area: '九州・沖縄地方' }
        ],  // 地方圏
        checkedLocal: [], // チェック済み地方圏
        isLocalIndeterminate: true, // 全ての地方圏チェック
        checkAllLocal: false, // 地方圏を全てチェック
        useEnvironment: '静的サイト', // 使用プラットフォーム
        displayEnvironment: [
          { val: 'Android', version: '' },
          { val: 'iOS', version: '' },
          { val: 'Internet Explorer', version: '' },
          { val: 'Opera', version: '' },
          { val: 'Edge', version: '' },
          { val: 'Safari', version: '' },
          { val: 'Firefox', version: '' },
          { val: 'Chrome', version: '' }
        ],  // 表示プラットフォーム
        checkedDisplay: [], // チェック済み表示プラットフォーム
        isDisplayIndeterminate: true, // 全ての表示プラットフォームチェック
        checkAllDisplay: false, // 表示プラットフォームを全てチェック
        enviromentVersion: '',  // 表示プラットフォームバージョン
        responsive: [
          { val: 'スマートフォン' },
          { val: 'タブレット' },
          { val: 'ノートパソコン' },
          { val: 'ラップトップ' }
        ],  // レスポンシブ
        checkedResponsive: [],  // チェック済みレスポンシブ
        isResponsiveIndeterminate: true,  // 全てのレスポンシブチェック
        checkAllResponsive: false,  // レスポンシブを全てチェック
        referenceSite1: '', // 参考サイト1
        referenceSite2: '', // 参考サイト2
        referenceSite3: '', // 参考サイト3
        otherReferenceSite: '', // その他サイトイメージ
        requiredFeature: '',  // 必要機能
        imagePreparation: '新規作成', // 画像用意方法
        collectionImgUrl: '', // 画像回収サイトURL
        textPreparation: '新規作成',  // テキスト用意方法
        collectionTextUrl: '',  // テキスト回収URL
        copyright: '',  // コピーライト
        analytics: '',  // アナリティクス情報
        serverName: '', // サーバー名
        serverPassword: '', // サーバーパスワード
        controlLoginId: '', // サーバー管理画面ログインID
        controlLoginPassword: '', // サーバー管理画面ログインパスワード
        ftpServerName: '',  // FTPサーバー名
        ftpAccountName: '', // FTPアカウント名
        wordpressLoginId: '', // WordPressログインID
        wordpressLoginPassword: '', // WordPressログインパスワード
        otherLoginId: '', // その他アクセス制限ID
        otherLoginPassword: '', // その他アクセス制限パスワード
        memo: '', // 備考
      }
    },
    mutations: {
      loggined (state) {
        state.isLoggined = true
      },
      logout (state) {
        state.isLoggined = false
      },
      inLoading (state) {
        state.isLoading = true
      },
      outLoading (state) {
        state.isLoading = false
      }
    }
  })
}

export default createStore
