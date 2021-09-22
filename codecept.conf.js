exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.saucedemo.com/',
      browser: 'chrome',
      logLevel: 'error',
      logOutput: './/logs//output//webdriver',
      screenshotOnReject: true,
      smartWait: 5000,
      windowSize: '1920x1080',
      timeouts: {
        script: 10000,
        'page load': 10000
      },
      desiredCapabilities: {
        chromeOptions: {
          args: ["incognito", "--lang=pt-BR"],
          //args: ["incognito", "--headless", "--disable-gpu", "--lang=pt-BR"],
          w3c: false
        }
      }
    },
    Mochawesome: {
      uniqueScreenshotNames: 'true'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterEnabled: 'mochawesome',
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: true,
          steps: true
        }
      },
      mochawesome: {
        stdout: '-',
        options: {
          reportDir: './/logs//output',
          reportFilename: 'report',
          reportPageTitle: 'tests-with-codeceptjs - Acceptance Tests',
          reportTitle: 'tests-with-codeceptjs - Acceptance Tests',
          autoOpen: true,
          enableCode: true,
          inlineAssets: true,
          overwrite: true,
          quiet: false
        }
      }
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login.steps.js', 
            './step_definitions/compra.steps.js']
  },
  plugins: {
    allure: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
      seleniumArgs: {
        version: "3.141.59",
        baseURL: "https://selenium-release.storage.googleapis.com",
        basePath: "./node_modules/selenium-standalone/.selenium",
        logsFile: "./logs/output/seleniumDebug.log",
        drivers: {
          chrome: {
            version: "93.0.4577.63",
            arch: process.arch,
            baseURL: "https://chromedriver.storage.googleapis.com"
          }
        }
      },
      seleniumInstallArgs: {
        version: "3.141.59",
        baseURL: "https://selenium-release.storage.googleapis.com",
        drivers: {
          chrome: {
            version: "93.0.4577.63",
            arch: process.arch,
            baseURL: "https://chromedriver.storage.googleapis.com"
          }
        }
      }
    },
    autoDelay: {
      enabled: true,
      delayBefore: 300,
      delayAfter: 300
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
      deleteSuccessful: true
    }
  },
  tests: './*_test.js',
  name: 'tests-with-codeceptjs'
}