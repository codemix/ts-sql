```
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄               ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌             ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌
 ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀              ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌
     ▐░▌     ▐░▌                       ▐░▌          ▐░▌       ▐░▌▐░▌
     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌
     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌
     ▐░▌      ▀▀▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌
     ▐░▌               ▐░▌                       ▐░▌▐░░░░░░░░░░░▌▐░▌
     ▐░▌      ▄▄▄▄▄▄▄▄▄█░▌              ▄▄▄▄▄▄▄▄▄█░▌ ▀▀▀▀▀▀█░█▀▀ ▐░█▄▄▄▄▄▄▄▄▄
     ▐░▌     ▐░░░░░░░░░░░▌             ▐░░░░░░░░░░░▌        ▐░▌  ▐░░░░░░░░░░░▌
      ▀       ▀▀▀▀▀▀▀▀▀▀▀               ▀▀▀▀▀▀▀▀▀▀▀          ▀    ▀▀▀▀▀▀▀▀▀▀▀
```

This is a SQL database implemented purely in TypeScript type annotations.  
This means that it operates solely on types - you define a "database"
(just a type annotation) and then query it using some more type annotations.

It supports a subset of SQL, including SELECT (with conditions and joins), INSERT, UPDATE and DELETE statements.

# [See the live demo](https://www.typescriptlang.org/play?ts=4.1.0-dev.20200921#code/PQKhCgAIUgDeo0oENJVvcyKMa3-B2OaWx6pikgCaSCJpHfQzYDGktjjThnrb9LPDfJpUiAA0jEjAEaQ0J4kdWmzFnLgsXj5MtVMHD8tDnubLjhfSbOnm+3Xgu3pZTETIbH8gwX3Xolj1m78fPx0QcGCKjo+nkYEauLaonHqiXHatBLEacw2-jEm9n75yl7BId5IhoXOGAlF1egJWqquZDnu0aVVKp3FMQE8QlGxnEnJdaNiJnJ4EyKU8LCUlAAqABYAlgDOkFuQAIaQAMoAigAykAAmewAuewBGe5sApjsAtgAOADZPr08AdtcnhdIO8AK4AJyenwAnjs-pBltD3k9DgBjcHrd7XSDXJEvPZ-P4Ae1u13WRL+mwAdCsNttfgTttdVjcdtiicjwTcnttNkTvjDIBScXjtgBaSDQomgy5PABm6z++MgACIrrcHs8VQAaSgACgAVqDNtiDrjkftCSSbuS-gBKS3A5n-SAAR1BT3BsPW2ONioA5pA+b9IK8iZCRRaCcTSbbqZQAJLYzag97vcPXbYHFN3Z7suVHM7auGoz6gi4Bo4AUVOVYAwstIHqAO4+1aQVEUitkinbABkkANRMVmztup8CYAcocqwAlZbFgCqAAUACIAQWWVcdkFXNarW6DpJ+-0zNJ8tN273BRINT1R2M+6wAbjz9tjVtdru9NgAuYDAP6bagncVKdq8wCdhcPzrAAHsAmZipsrqfJQPqQM2jwYRiX4uncsJ1iy4LfNsy7rKiADWTYdkRJEAAJQTBsFgUSrzFp+35-gB1ytrh4IsRBqIAPrvORVF2ueMCUAAmtKHYEnCJp7J8nw4psSEoXCkrSuCQrNvC163ve2K8e2sB-O8ryKbcKmQAxRLQa8cEIepyGfLAQrgvM0J7OC8IjjZqn2Y5zmIW5Hl6oiyJohiWKQAALFSACMOzbJC7rrJCFwSUsPiRZiv6QKsRKvrpJWejiqwvOa+JPo8b53FCRLNjiRJBk81VVZAkIpp8mZCgWUoQm6HoYjydq5SAwDgDNAGQAAxJAi6bHs-pPLNwCQAAYplJoYS80EKkqlUHTcZosiZTwAOQRv6w5-IG1xtY1I2etClarXsAU0p2lLJusHx8pSkAALyQAA3lAIJPBy3yFQA2lDWDgzsFyFUlxYKuCJqTnsvyFSqABCvnXDqkCfI81y4-jqqHADP4UmTWyEesnxozi4IepAAC+454Cj6zswATJju1U3jTwE6cWx7GTFM4xLBN04DjPFszGxs4V1ycy8vNIxDqOFQAzKL2PizTKoALKrUBTxy5T1OS7T9NA0zmws5rHNc3r+AC+z8WmwrFvW+Ca320HTsqsrDN-G7Hvs3KynPDzfPI4bkAAKyB+bkcABKsZ64c50rLuq6l8eFYnnzJz7-PpwAbNnjsE5bFLXHdvxekXzeqoTEKUnHGsJ0nuupwbguFQA7E3iuqgA6lVFOx8W8vF7TTnOtjg+s8P1ej-rfuFQAHDPFuTqznzFcadsrw7s8qgAagp+egoCy-l0PWs6ynB-pwAnKfSOk4oSu1vhHFuoIAQAC9t6e21t7Meh9IBJQAAyAIJsuDEfxUSYmUt3e+hwKKKiVOCWBu8a58wALp8y+HsVEPIEa-z+AQ68AYFRQmBFWb4vwAS+WhGTZqJCEzs1QWrTY64HwvidvA-evtIDMLPqCUsTxfKQGXM1Cqy4l6k2LIIz0wjCqN1ShIskr4v4IKYffKspV-SQhdMsT0XJ6ECP0vo-2YiTFSPMbIuuCjI6t2JFyVmLihHsxPsYyRZjIBVwoZYi2yw7FX2TkSAs+dwQ3lIbo1x4IDHII8ZE6R39a5pz8Rgim0JbHSj+BcEJbjCoAIiaYwpFisDUPANzfY2xfomgANwbQRHSVKJ04Q+nWMpSApVNi2gGkKYa6p7j1RpDVXchNnwpTBjVFJQZS6Uj6eAOapwnjXCutsI6Toup+O2Fs5EsMXimWGaveREtnYq1jjSOac8XjX2GbAY4o1oQeWWU9SATxYL3lfi8d0np1g8jVtiW4FE3wHBOKcfZm0oVek6dEsWkYXjvF8hLQE4JiwEmBAceZmp8RMi6s8X6Fx3mbUnCSTqrJlKqRRZARF0JmzhguFmCMK5lxzjrOuGcSy8SQCrAADXWZAP5b0AA8UMo77gbNis2jtICiqeSGLas4ADyltoa3MgHPXOc5tyr01WDK60cgZXR1FDVcqykrgAAHx7IOUck52LqnDKxntUl5NKY6rfFstlwzURD0hP5eEzptmvM2OAZZ0qhagzlf8pVWAVW1jVQGnOYCc7bQNUam5XwXhmotR-He6aZGOqwM6tZ7rPWbUOcc05ipzn4guKCPq2xmzFWTpcyAjUgLwnuZbZNErpVG3TfKr0WbaaqsbDAPVhrjXltNea2c251Y1rBjEl465JyrnVRHSApwEwAGltxXUtgAUgdXzRtrqPX9LbT6zs6TjLDPNG1RUkBLasySddbYfiqRHEVPQ-Ytkar8peADV4r97jfC0lFFE6JMTsghGiy4Z1KVDMQ8hu4qGnpEmLHySquwMWwkhNcfuWZ5FPBahSxZU6LSNrTWDed0JF0qhXBuQ8ZbUMzkbPm61kA73AelM8K6W6q2C3TUfetKym1vtwx+rpVVKKVVZDpSAqZ1R3PDIii4M0U1SvinOzNOb6wruLeu4TFbt27uBGDZTxZOPqa9e2-YFwyVMZalGglD5PQkv9F9ONgy6MMf2IFvDGo2PLMbbO7jmblVThnPOSAU5lj6o3SJg8qN01JQxmeotNqElEmhFdQtEm72ojrGWSEtXq1s3TYelTnHm3menVKjO1nFW2bVauktBXnNVvE88yrN4atkxS95zai4-hygzJA7kMJizNheEqIErVZTfEBAiWbgHGvNfWsl1ZVm0uKuVXuWsh412lphpuytO7yv1aqzVrVJ7g3nptZbM7EJrpddWUbHr7GXjSvroNhdyqZy5rE2LTVT3xvyfe3u9rB6R6g+fPFCHHyXiogUnsfzgGiSdSJL1jjqyBs3bh9mzLc5Gy5fy056sjZFNg1K4A9Nd6KetatdNyThwoHQk2BTCirXMdueiTj59V2IcWcnrD3j8Pl2o159qvxDnnsmre7u92Q8Osjx+6eqbIZL03skw+p9TracE9bd6rMZPW6gYRHsUqfxIeqZh-TtXWArpM+y6zkEFN6HbFE6G9NVsKcAB0fXLE956d+eicmy5540qRtada1ft8+DOjvIAACl7qbAAIQXud5ANappYNdVoRHmDFJAz3PjcOrZzpMp6RIfGH30q-6q74wjuzobiyciBlSC3Txx+ekn0L3VY3G9vinJOOcJf9VTjR9qifwp9WTjD3QnkVI0-CPTbvv4VJBa49fS2yAhMKTGmiSo+jkJCqYKObiEEWCiUQeWLF0VRsYkaCbYB4HTRUYFDlOULkf0HhM8XDBMGvZPAzd4IUKLXYRqYnb5ZYQ4HcB+Q4OsByF4O4EkdsPUZ4SkdYEjaEB0HkYnC0JUZsJ8JUbYRUXDE0LBf0TYCjNqeNaUb8V+DCR4P4K6bEfFcEMkVEXtXyQUa8T-aEGkH3TBCAz0aVFBdNZQgERdZcXyZ4RdQPEfNVPxbUfiHXbVG8b4FHMba+bGLVXAmUVfdfYvTfA-Cwt8XSffAzKkNws-MGfiRTA3aPMGImIkO4FUM3fYbbYMF4DZb+S9S2BMRsNNfVLaLaKPI2K6KGN1CHfZMAcAGAEGQooo4oko0oso8oioyoqo6oyo-IuoioOoZQKsX7FIyVKVdcS2ZcWsQ4YsQ4ZYdcbLVohMTo2sS2Zo-o5YBMffeo-I0GGo+YhYxYpY6o-I6aanF4YRU8dYdhcEBVTVUFN+PlI8Tg9NDggMN1dNSGLAGqAmTYgEbYmFUhPpLAUpSAR2PpbmPZZZS2H4RqcEKsWCOQzYKZCkRdfVO4O8B8EFWCQ43kbWSsMGM4h6PmTBDkT0L-A4-4I4pEwMRE+Eh6d1S4qGG41UH414P4gEoEkE2OZ4oUCE4yQqcEyE64WkwyTkXEd-G8dk6ED4r4iVScUETuciaWIlZSBVJ+MsF4TE6pMDQUv49NP4OUz0C4sGK43FAmAUoU1EEUz0PBWk58ZSD0QqCUj0Xkn3Q4fE-0HUrkT4cUw0qUmErEuEk4vEzglUiGYkvEJWS060vUqGA0yU40+0s05ZB-fkFRP4X020k0h02EkdIkcMhSMGEgxMv4d0tUkkkI1MqMlUfU+0oMyUs0n3AUlSKMy49U1UEsz4HMnpCZfM+RXtVST49Y+-RUPhfVTkG4cMGPEGcIgAH1VHL17MgAHJVCtyrFzJ90JjbK9EpJ6mpMXUOTlGxGlKOLnJ5GpPTXXOBNtD5g7N1Kel0lXO2GnOYS9H3K5EPPTVPPbM7MPL5lnHWH9E-GhLjO3M3LBnfNtEJNVM9ORAJhvNnMBPnNtEnKwG+GXMKiXJZKhjRMvPDEZLvPDFpIxGfOuEKkfLQqLOWVOCJCAmJ0+AvK7N0mCOPVXH7NVH1VnAopVD7D7Bor7L7MnJwrwvImUi-NBKhmgtfKdMlWAo3OmU-P4p3IpD3KQqPMdJlIvVYoIqIqvLBlwvwuUjkvDAfKfJfOPL4qpMEq0pAopB-I9OuK9NVEUrYs+A4ppKhggvQqr2XNpLguIsQoPOQqhlQs-AwvUpgubJ9x2g4UOGRBwR2MXUOB0mg00ruLJB2JHMA1+NUOEo-Jy2gnuJ2L5nXDqm2HCqSsisePTQioeM9AMozOMpVF8rZn8vvHyqeKhj5AhHoUKhCtqqeFpOUjGT-C1XSuwolSTxIxRACsquCtCtjN4ryqirBhGseNSvSp4qkvGoqjBgavBHoUKr-Mjm6u+HKsCseLAqDEGvqsGuavSsKjStas6otHXB3P9D+DgIssXSvSeFhEyq2NGsSqeomqhhjOmrXPip0osuWqMv-NVHOqmUuuuu+sZlpK5UKjup5P9PrJjNOqhzBvhBBihgHNMoIpuoJGhGLHRuUvEpJT+GhGyKwAHMAuhExsJuLDJpUuJUtCJtRpivJLiu0v0pJpeuSseIZotM4KjIZs1OhW1J9F1NQjZrDO+AJF5rZqrKjL5ItATEJE9FL0VA2v6qhi2hvCsk0rWt6oqqCqxvdO1pVr1sJrdT5gXk9CGqkosq3KRr+orJVHlpISVr+CNq2tpOgNYkKnVtYlpIHQtsKnNshARpL3uldrmpywVvBGdrDvBFlpeEOChGMgtO5DgMXVKqOM0vTpjoVX1vhkoXTSzr6uNqJrzr5m9s1skqOMNqLseJzpNvTWrt1trv1r5mdoysru2Gjprs9DzvTS7qbp7raSwEDstq+pZuRt0oEtEqhn1TlDlDzE+tlKZpIobOXr5mlg3kXtXvlLBkVOXrtszITu+AfGTsBDgO2vYTZjavTs2Hdo1q9o1tpKHBHEKjbuirzt9qqjf1NS-qatgrnrzEZIAaOVpKfA3igoBh9GDvlueAkNPpPC0Khm1v2I7uOIRLpr5hjPbrjMhFJwpEFCBqfKutPApuxrprdV7rBixoPuKpgfRPgfPtpI1EsNnmQYljzMlLaqweDsXHeCMwYdPEXTYZDE0pxNOMtMwftOwd4sIZBpIaRsoa1QuuIYBAstLqhhHq3utqEvHpoYBv4z4e5AEYBG2uYaeB7mEb-qwADI9C4akc-v9p-otuDtXETsBGMeuCEZQ3MeeVEctPEc4LNt-q0aRptt0fTJWoJlccOxRGPEYeJO8YscSfYahj9u-pHuDo8dBi5sTpPridPAZrobgfyYBAZt4f4ZKeuAZuiaOViZTtPDjslRsaMcqcXWdS3tXHw3qjrqJr5iZWgi3o8YMv6dHsj1yeuCGawAAH4mnDSjHxmPGFVnViwRnibIBCoRmt6imJnKmoYZnrE5nARtnFnlm3iiC1mNmiCt7ymWn6nSnpnZmyxuQbn3HWnTnVmoZLmBnNKanXm7mqmHmDmnnARfm6mz7BH3nznPmmNSpGmgXQRuRjnWn7cOmum9CW6oZNnwrKR6Hdn3SsXUGkX-mFVFQ5QKpLG1YVsKpZGVHMw1mZm1T8B4Yr0tIuUtlnVKEoat7LH9Z8AZntnZxmp9DjBLGt62WCx2mZnnV4ZLH87ColRSox5lAaW4Ck0TA1nCBCppWr1KFaSsBuZoWFXPRGmBWhWkHvGt7cGLh8HYQsb1GsAVXTxpGpKrWbWlHgbaW1HKEDLEYsAfjQ4nhhXltbRlgiR5aiVaUew-hhWHWVJZwVFrW-gYQFUgbfjvgqwAQxpNgU20wYRHWARs3826W3UNXIA1nTaoYqQq3tbwBdWWy0rPh428Gk3eNlh0zuoE23XmXWX7qtllhOWERmX87vKU1mnAQXmwWEHPGUWfm0XA2MWsACW4yJ2hn8WrnNKV3kWsBSXyXknfg+Yd3dIi3uCoZD2nHIR3U9nDKCBu2ANxWVkB2WWta931plAZmJ3BXmxs3eXOBRXNL73JWVkZWX25WYWwsf3CBj2lXOAR6IO8BS38AtXCYh29WeZDWnhYWWyP3mpv2sBtbUrlHVXLXO2W33WiHQbx77Xz31oImsB4Z5boJYIe2pQCxtaB34XuQbrtb6PqlQVqFqOLjNKZF9Z33DHARP2FVuOGO+Pixj3S3CopPePYI62R2JVsPmxF1P2COPWiPNLXXSOi2vWDL-W1osGFUtP3W02ngM34SeQc2vhoRj2U3COnWS31NvjPRTOpHJOlx3STPA2oYUZb34R73+2uX-3e2CxFxIB32h31nB2dW0P3OJV1xc3HOXOC3nOdOnXiPm2CGMvrgvXaPIBgvOVIuyO5GC2B3j24vNLDOkbhXZrdiz3oaK38Az2YysiROSu4PoboPF3GyyzNKPqZnFTbJCoATSxyxA2ATtY6FrgYy7TJTTaGyVIEPIBvXEOwPY72k4WYSnEFv7TJODat7pahabSr2xuRb4vGxNKxaIyoySWqXdIYz6XIBOusAFPTvBSBbHuOv7S3uPubvBmfTzuxT-vlur2gf5WMPjWWyOOQW3HJ3U6Z3UHOnEt0WTa+n120ekfV300l3eLQXFmz2KW4QyXdIR63vGW8BSuAPCZH3uWX24OpWkfP3s2-3UH6eYugPZX4ujXaaqe4OkOUP9YDXPvtvGnQX2fJPvHiwqeC7WYiVltDpFQgRF0aeePGPmO+3vH2Ox3rOGvFPGP+OFehOdYf2ZnIFVelQzNNWPceqte+PaSDX1N+8Dej6k6t2VlUWMf52sfMWce4zPe8n-nhmg-eKQ+dniXT3nvtoYUr6D24-y6k+KeQ6RxU+KoR7M+PDgHrgc+L1IGqnsiZny6meers79Ymunu0+Fr6E2u8Bq+z3jrHhy2r26-RmyuWOVluub6t74ZC6B7djq+VQQAVQVuR+x+S3NuCBS+lfPQR6FVCCVJjJ5awRrgZfTmU-0-KQVuhf7fU3yTvgZe4OsAb7+u8BZuDub6Y3OAdo+oF-f6l-+Rj7rg1-X5N-CZixt+269-f6G+TA5-U-ngH8639lAwbCkKG3DZz5jItoMAcYEP49UbOWbBVPDHhgt9+waDZEkBw76UI8B63ZQAQIIBECsARA+Ttt3Q6lRwAMPTDj7mX6v93+G-HDm00Ji+8FkmPXpmrQ1qt0y8BlMvs+wr7d1diUMJvnHw74N9RBafDAdkTe4d8xW5XZ1N1zfqaV+6m1Qepb0gD0DjIbdJZl-xwGDV+OGA4sL-x-Yi9cB+sGgQVQl4C9GmWgh8DoNR5xl0e7A-3pwLw4Ws9OJHQUHayHrtVWqW9HEjwJHBb1VBlVPOj+UC509yubHQqHYKYHNgdBpzbjjq1k7pVjBZeN1KpwtBxDP2iQ1gbOz949MVuFnDAQEIkY79nWRxUITsTzoqkoYoAz9pAAHA099OgoKId3zfpYQr+83Z2hgIVRt0h2bqAdj+wGGJdsWTtUOkINl6CCh+CqSQRVGjqDUJ+WVfqme16HpUS2lLNPvv04AzNFhjVeQd30UEmA5+ZsLhFO31Tggqy8AwgN0IfDp1CY0IR2DcLv7z9wQi-YAcoDiHO0gQ64dJHsGhBbRwwEnT4cYGlb7DFqTwXwY0XwB3Drg6w1qv0LLyDCL+RQLTqCOVbpUMRxA1EcYFg4wiy2uIwgAiMeDYiSB8HYAZYK8jKAqRUMbmNkRmh0CX+2g+6L8P+GAjgRQrZ2trVy6JtvBhNUujv1KF+NAmDvY-s1GLDa1hRqDHEnUORjwxlwOvAsNyL16FR9YoAn9trU-Y-tmh8MYvOuC0gkjNgA7FUY72XCUJxeBAXUf0TQzeMMBA7LUc1EtGkC6Re3ObvcIT4XBHhzw-DvHw4SOx3SkQllne2iGqi-RbMFBnGVC7eM4uMzZIZQgH6ejHYoHAXjzEaY7Qzh3CU8JcOuHa05RYozvq0NtYCiZ+DzbjldG+APRmQV0fOppRQQaCrupggsfDBQSlj+ejZN0QdyNFIjFQ7pZ2ls0jrVDa6jdNQcPxWHF1lhr1T0DX2pYbCS2PPUoVSPTFvCVe8oNXhcGO4N0t6TbPkbxnhhntc4CbYsFWyvxx8k8rMShG90PGk4t61vNcbb174rjeOR0dXueM+DkD4Y14i4MeKrb39lez49cbL1ZhDDoWH9Fsn+Mf4W1ph3wYsJSXdIQTwQq4l8RuMC76wneTHEMd3xiGPMEWgILjjGOk7KdYJgJQTqg2E6EA4xBEpTm2Il53jkJLvJXNOn27zcb+vo8-n4PqibBiu6EpUQWIHaa9gxIXcrjfQHY31auqDQfqOJnG6RxBGgncZ+3TrQSng6E-jh31SGtUeQ63Jca6N24tkAA4kchjKPDoa5nCUZAD64cTngXE9NFDEaGaUruPPAyYd0lLGT7qCqSbmWGgimTmwxYK7itwskYDNJ6zKGNDUOFbJtRDzT9sy3uoz8oa91MKQWEClqsFx6VHkNFOhCxTJeLZeSc1EUkWd066kzifBM9Fb0ySFJBrrHzT76oC+y4S9pFITYKTPRCqJyUZOhAmSLO1UyyZpOLDV9lwK3JKRc3DHAhHqHNacWez6lXsWp9pVybxgs7LhCpVkwaTYPrbAkrOMvdic4OKkcJKh2wSSf1Vzoz8GWJXQibxOcHVdVpR-J4BJw2lnQVJFxS0dpJ9yIDxRGnPvpnU9HZ0DpnmM6H5084BcsAEAv4FAIBAwDJEnFfAM9Os6ZsYUuHAgDTyZYnTMJWyESYwkAGejNgKkrentOLo9TxxtdZvnONBEzMMBoIqkbiJOkRcjhZ0Hns4Mxm0jlAdbQgM6LLZddkuFoBHob3HreTiJ7wfMQOQ5m41zKDXCznBIZocyyaN1EWSRLFkG8ypzNPStGylm8yZZhzJ4NXyVlrN+ZBvM7qKVtIayVZwLJ4Pdwlpg89ZZk0WWzQ5n80MQgtXWdzK0qaycJLTHmqbPtlwS4WBvCWcLPNkkSwmW9L2VzMqkVRoKBfDsgX0wqfg6pPPDslvRVC9luu4smcuTXdBJx4BHMyWWZOgoACCA6c72T5MgARzrg63cgTHM0oqghyKoBOZ7KTlMpCuKc6uGnIN4Zz85Wci-rnK5kWdC5xciwZAFLmoMxy16CclXNVlk1pYiKRuarObk415QRctuU3LznFgu5P7cgQL0oFw93eI8pOVWHrnZsQ5Bczyu6W4qaVC5V7QuVvWgrddyJeASuCPGhaHoPZm8s8k8JJDbyEWDcveV3K3LVyn5r81OVxRnlqU0KhJc3h6CvaHpoWMiB+YbNHnrBx5H8g+emmtjXAo03NAMGPMDbwK0KbMqHAb0FlTyHZfszSngoqnbs4+IcoOR4XeDhzPKUcmZn3LjIqgyKlcvlk7MBCCyyKE8w2fgtblwd25Cs+2UvMIAlzUCZcqiswrwD7NcFMlZSrOE4W4TOZ-CizjwqaLzyO5ZkwRcQJ7mrzrBsPHbhvMNnsKT0CqTBZ+EPkzyt6V8mZmfJAWvsJFXsWxRL3AWOKR4UC+RYLKorGKAF+8rBemiPlkSLeDzK+R5TQoWKAlPPIJXLj3iuLuQcs-4gvIIU6NSpsVOJYHNIVVSaptC3uQlILnNRh5hs9Wc1Hhj6p+OvUktlot0Vry9Fo7VWQUvzlwTCFhLPGWNLj4Bir2kY3ivewil2KopyY8pVQJ0W0DqlhsnWcLTdm+zElmlEZTaR54OTHpQy+RcbMjKuyNZDSuMosr+5x9XuUPe0pUuiWvMXZdslZRMtQaoKHoGytPlsoebQ8sp+i+RdbOFLLKfZvM1ZbxXuW2zRlEPD0IDx2UDL158y7kCwLYGUoihfMXAppXx6fkPebzPQYcGwVqIvo4IUNkyWMgKpFRngvLrCAVFcl0SbU+6gTQynuk0VqDahg83hklcqIAGZcC2LwHv54YSURmXgAelZTlkobZbHwi2iQIwZfwQGQqkXDuloumlLGjzz1C+R-QhURcA6BBgXFnww4YENpOWSAzgZEbWAaCT5UN0iQbKr0ByuwRRseVaqzSnqChiirCoZ7BMOAElXSrZVV7M1b8qqUpcLpSA6GXZyhjICYZWzUUj1QVRFiSuqJbkhZKxqXiDKrqt8OFQ9XfBpJaiN7kSpwZeDMVvqnFf6sJptiZmoAxVWGxBnYwVV0bHQplCRX0kHwqKtzn0qsH89dFjTHQpms3FgwoYFa54Iszbb98z2HjLYRVHjYmh86UzfWAkgBjmceQRcreldB6RyYZmWTX8F2oxCvBe1JoUiXGSujDqjglTUtaVGCn4BlpShXQsj0EYNrq1WAWtSiAWatMG1A5PdUS3BZaEj18KzNZu2JYXq91xPQ9XCr3VR961+Yp9eMyax7Br4m4zShWrJBiln1rTM9uxKA3cDyeCwsvC2sp6-1INvcvPjBo3o+gylDzeGABuJbsSf+EG6jsWFnrz0jkONIvitznWZTV5LZPdSOP6rbqkGW9WAAABJwYTawah0m1R0aCZrVbmB5EokzCpJ1fcQbjKnG7FpBFxMdXh2o0saxBjGyAGJqkHpV2NPPcjUFR41LC+No0gTXOJXUIgyhJxTjetSmHV9u1k6ttvOOE03Llkb61-h+q-VtsoYYMW7qg1gCGFGwUmiqOnUdibAOkqOJzbpFnAoJZNna-AKAPBiX0+U7+DddjMeLSwTQCqFzRLC4kdIBwe68uhZr0L6bzOKCItbavLWhaNaSWwNtusgBIMiQiKP4OsCgS5aZ1vFfceJsaowbvNHartYVv+AlbA23m8rVJXhhXRRU0uOPrOHpUaDQ2RWpreZySitajilW6Ta1Rq1CwaJdiwLffQLHZ1FNBwgcLKOU3ZVpxpQ5bZaRLZxbL1zwZ2jlvM5CwiB9MggIVFm2e15tumppbsTkGba3SmQpobtqeD7aKYX6lrbstI0bqXtn65LYGLw4Trv1dmxwrOA3xb5PNBYx2B0k8Lg7vN7G7rnusllpbG1cfSkjVt60UStKITXRm+whjP1KQCMR2orUmGzCyN3jbOpYxW5wSLRj2vdSPQO0paetSGzgCdq27aLr5T2una9uS0A7DNj28GHjrap50DW66zNZzp+1lbsm-2ntQ2s0pzruuKMNJk7HWWuyZE90nuSlpl12bAi4OkenDox0I6GuZvVBmNoqio6wNXm1sSz0x2aVfqJwiGIrsKigC4JO2vdQhuuAHb3tJgFnadooH29wYDu+-AmXFpLK7Zqul3Rurd306edZSkXc8Ej1c6JdKNKXQZpG3bBYA8RRIpJvo3dafNiwFhf1sa2lbUtqekrmezd1o7ptMzN3dkugFrRwQpyrglbvBhgMfQhUWvZ6Ab0Yy3d1O+LRupw15gPdw24Xr7p91s6JezeovoVDFBJRw9ma-vUcnp1vosAsep4PPvd0J6q1SDaPdRpSJpEisMO3Pd1wL3Fai9LW5HVVLg3m6C56O2frBtw0rkue5XdvfXstLJSMd4MFJPfrb0gy69neopXnx71PaPGDicEE5GYSHkhtx2kfazoqVbcP9efQqD5pp0brgDnoMA8RWO57IV9qB0A22QgOUbk9gO2dZkRYXgxmZCnbfbLqHUaCyDTYtdaZo3Wnqp2Va-LSJs0qwBg8LOScHliz2k8X2HSKPODpvq+aoYPHWBtHzPWeMyee6+ruPQi2eMb6mwyTDWI+2far1YnTdeer+0ab2DAmTcNuHB2WMBD++7PWn2EPo4DDphrPr-REP4ADdXMo3XGRN26QzdOJOrbcMBJY6FZMXODvDGvWSGlJjsYsDIYK4WV5DUW9GZTpInFgiN6mwgKmOM2rrdF6m2zXGVgB6HDwhh-gxzl4PJ90Zthkrv4eYPSGN1shhWeEcUNU0g9D3FXTrCUNEbVDDBzNfepvXaHUjvFWAPdgPDbgPNVh3SEYYsO5HthNhjjfrHsP8LHDFWs9q4ctLuGc5nhm3aEz82cB4YLRgI2TzgkxGaxcRggAkZ-Z7G2Ddmro49jGxZGeqkO0Y3RzWPFGX2VR7MrUa+WEaVDGWtQ88D035j2jUlOdTMuSPGbj9g2zXU4YPFHir9b4jtawbwBfiB186g45CYTYDqru86+GFMuUiSivonwUDvrChOy6ZESJ5XaHrqNomLx8XLE-Cdl2Ho8T1Rk2XbMPQrcwTJJ-ANicf3d9n9nennsiZ+42zHurJ1-Z+ITb50Bwe9P4nSfRNys0J1fKE3dvOJEmMTOx+jtdsk6PaVtyhutivtiVccPjDWk-RLs0rwxaNfR3udzCpDg7lw7GmDfSeWN0d1TDXTqX1JlNtiQtma945lszUN7HuBBnQ3ZpVDg6Yy3Mb0wabbXXBfNJXN067Ne6Ly+1mJw42kaug+n7S3MWMwGb7XBmUNoPO2eGYLmRmGTT2601zLbZYGmjzwOsGyg1M2TCDgJ3it8dG6-Ga1KBtM6Mo13zjj1G6itaeCqhTJStFwDUwWYlR7qA5-Cj03uuLMqRSzupsvV4rPY9a5jWAPxW+SWOaitTg2xnefoqhhyr9s4KbT4eUD0LeK1NcSjz2AFDmSzwso7Sua82eUatRsac8YGsWoNralp-IPDH7NT1o2e8tc13MXlXmdjJgWEz+ZrMmB4YH8+ld+dp5AWxT8R-83gDXUr7iFeZ19RuufMiVo2FZtreOeXIV6tzeAf46fuG1nne5VC9c5uYfNYAdzUldxfuZmZwdxjL5w7SXucPeLPwl5684QFnO8V7zoI283OfHqYWiggF6RULK5lvmCLH5guV+bVGNFfzxgSSxBeXWJGb2YFkC4Ba8VTmdj0FwswoposenGz0Jn47JdrOZrYLA56PRcWbOZrWzAIds01q7NG9H1LZ3yG2Z5BWXSzNm6jXqHB2EEQZAIbmHaBh3JmONPqjdTdQ8tvxZ5mZ9tUur+W9nQtH0oQeEby1Ub2D4Or8bzCyOswUzCWmK7MJS1filDJ4jK35VitbApDPO9E9P2zOfGji+p4E6TiY24FwdGAjpKlc+Apmwt04lLXutzP8Kcr1KukwDpPUKnpBPVkU8Sb+OiaDTyVuwkMdnFsb-LiYgq1lb6sbrOrNF7q62N6s9r+r-GlNhsKGvgXPTaRpKwm0asGm3x6V6K-NaknZWE2Sh+k8ZoVHnWyqUwxs0MJdPPBWruxLS2NaA2ejarU1o9jJv8vvXUVS15JVxwB3p0S21K4I4wYVMpbBNPV9TR1dBs2W8LlsLY+CfVFJLl6N1M9p1PGkXE5+F1-qmjfZprbdifUoTYBi2bXaeeQNkm5bCE0JWZR-jQm49dmHvHVtFGozdt3U1qWormasoy+bittGvrcfZK9qCatnWBboRo3gDpysrc8rpRmW3IaKuScSrwEoYeVdFtp8JrYMOM5KWOt8G0rs1wW0hbmGw25b11lbtRbNspbXuFDVsY9osrDXZTo1xK+NaOvpp9bHoFM6bYXJ6bLbpOJQzbYXJ22AeDtgU5PSQua23bdmw6zVb+se5jb7JkI9l1Uay2e18t+0+pvuvS207hXDOynpeuvGngftuAZ9fdstd7qHSPWwad9P+Wy7oJavq12huZqbqr3alU7aRqM2XiZaxkT7mwuJ6t90ukvVVbFue3Jbs1r8dnb+OUG47HtmqxLZOvomUz09pO67eHsp7tbFUZK25eXvJ2ZmfJ0nDPc3tEGOj8di4N5cnvsm17t10+yhcqsX3Pi19w+7fdFMpG57B1he5fbtBT2QTV0O0Nsdnsj3t7ukZKz0j-vH3JMQ6vazK2j3o3SNP+TfdGeGoKmz2k4Am28RSNY3ypXM3GzBr6k899T+qI03RtNMeRY7cZN5ecoqgPxMH+ph+LJsoeR96zNpCNXQ555-JmUDe8Uj3f2u7mqTIe0Zarp56iFc82Du7oI8e60nRHFJiR6gxROqQZmV0RE+prmh0REIRDcMAdC5jApQUEeKZK+FlBYhVgTNtZVvIa5l6YNeN7rfQ7IdIPTgD2ujSQ6z2aFPGs4TIRQ7Me8VDLNFqx1fpsdp8PHRD+xxAWMVOPwYLj0J1oQ8dMPvHUlIG02s5tBVm+84h82CsaVbX1w63GZvqfXB66fd+ptxwqlhW-W6N+Trxyg6kryba68wmSZOJU0RrsnBN-WBk7jIGjcndGw4Ew7gBdOyn4MCp-I7jKE6o6xOy62TqmFJOr92TmDQrwfPR1X9qAoPJODXwg7nCU4VrMU5qfTieiWqeo-vk2dIOqe-HOTFdD4cVWxmr-RZj+2+vbTHtPg6Dts+a5njbjoJu0RsOg5rCy89zksZ87j7Z8bncfNfX87T5u79YLT4kaHUWe+HgBtqZdHnjRl3P0Vu4umr3T2FQvOC2bNx38K5C8ZKjkmGI5TbnW4iroT2BF8YC2cTOsrrzqUXONxELPMXqKn-Di4BE9jd+MRyTNnMICaNJH9xgk18qJnKHSZcAbXeDGKdU8zTwA6vZpWn2iO5MhUdPcMUz10a3dkrkwGvq3rqFlH8ruALvsEORO8+BTwgNCIICnPl5QzmRsrf4V1PzJ91Fbp8qeAQuCADLgMNm3SkxGQYhzsJ69xOecv1NsAeGCKhWf6pGwy4WcLlgRC5wEwuBQAm8X1R7hYA5a5l+yJYMXPUX4J8GO0L7YDstngwjpI9J9xcP9lAYRUyKPOJlmF1nBYK5Fg57FgVQDqEvTIiIf+nlgfpih3AETOturoiblsjxhKdFgfeBQlwUUPdIczdBrdvQiihLaNNtaLBncTaxZets30yWOdiU6jQ-A9g3E0VkjILBogqorwPYA6O8Zrv93ewYDucYliXjoGP+ufOml9aQA0EUMDGFDBFhQwTYUMAOFDCzhQxG4UMaeFDBPhQwAET7x91gB5xPvX3YH992B8-dgfv3YH392B--dgfAPYH4D1gCFigfIAQsZ9xh8g-YfoP2H2D9h-g-YfEP2H5D9h9Q-Yf0PkAI2Fh6Ni4e6P+Ho2IR6NjEejYpHo2OR6NiUejY1Ho2LR-ihYf4oTH+KPh-iiEf4oxH+KKR-ijkf4olH+KNR-ii0eM4WHjOEx4zj4eM4hHjOMR4zikeM45HjOJR4zjUeM4tH+uFh-rhMf64+H+uIR-rjEf64pH+uOR-riUf641H+uLR8nhYfJ4THyePh8niEfJ4xHyeKR8njkfJ4lHyeNR8ni0ej4WHo+Ex6Pj4ej4hHo+MR6Pikej45Ho+JR6PjUej4tHv+Fh7-hMe-4+Hv+IR7-jEe-4pHv+OR7-iUe-41Hv+LR9QRYfUETH1BPh9QSEfUExH1BKR9QTkfUElH1BNR9QRdfRET78D2B6SgDekoQ3pKCN6ShjekoE3pKFN6SgzekoXXzD3zGW99ehYA3oWEN6FgjehYY3oWBN6FhTehYM3oWF1-o8nfGPH3gb6x4+8jfOPH3ib7x4+8zfBPJ34T2D76-iewfQ36T2D7G-yewfU35T2D66-qeTvmn9HwN90-o+Rvhn9HxN9M-o+Zvlnk79Z9J99f7PpPob859J9jf3PpPqb959J9df-PJ3wL2z4G+he2fI3yL2z4m+xe2fM3xLyd+S8i++v6XkX0N+y8i+xv+XkX1N+K8i+uv5Xk75V9V8Dfavqvkb419V8TfWvqvmb5175iYesPmHpj5h-w+YfCPmH4j5h9I+YfyPmHyj5h+o+YfaPOH034t+w-Lfjfq3337b82++-Hfu333678O-G-jvL7nDxH8t+XeI-tv27xH8d+PeI-rv178b-e8vvPvWfy3z96z+2--vWfx30D6z+u-QfL78HxX-N9Q+K-1v2HxX-t8I+K-zv5HxX-d9o+X3GPzv5b+x+d-bfePzv-XFraNNgEMJZ-dsDGo3vbCupoU2FkgAnj0HBxcE6P+xBzKJU8tVEKm+yUr-x-PPHf1P4xn9sIrdquWlP7ZOqks3BYXf0qf8ZYR9TV6djQO3H9Dssh8dS0qG01J-FS3zJrZDycxfuk--V1xlZVTZZCEhU3PpA84A2FgzACguClSEksJB0XhgKIYdjhUkFFBVB44FZSwQUd1Biwf00je9Hcs24U8G5h70fyzQDVgHhz3lgrU8D4dOLDowICDTagK8syAm4HQDOCDNg3EqAogIBBaAzylAdNBbgKDNSAnnnICG9ZOgkJPFdCwEDPLftWM175RkRTQbgDMRNBCIXyBYN+HKSjHs0+ISG5hwdQmGDNWBQqDnVGmUQMtJxAzxmLNqkQWG5BobPiHhAy3B6HzFLAisCMwt6HQjsDwlb+GM1nA6wKOx3bdwKJQ-gXQINMdA-yybc5AlxRbJTA9gOqQl+UlF8CZ8eFQ8CHA-0CcD4g1wJ-UbgQIM8CuYbwPSDuQfgJ0CyHLIJTxgzcIKhh5An3GiCS3HwKMxbA7IJSC0gqwIyDUGKs0iVk4YzWqCHocwLiDmgmwKSDAgxt2-gZmcoL9ZWAigMtIOA3oJcD+ggIJTwhgrmBGCvA+oXGCeHKsCUCxYVQN2Jag7kGtsSgvyAWCXgJYNyCKgyIIHtt9Fy3YNE7QM2DMGdPtUptlgHs1P8sqCf2vYUEIwPJckoIwMDxjfb4LwByXI2D+D8Acl3iggQ01z5gM4MEMIByXeuChDOAcl0ng4Q5QDzxX-COiyofOKvFfBVIbnG0NDkLEJr1eOAtm659TaTgLYlLLEItE6NRsClMHoI13i4SQwkMzB4YSeEpDwYakKwF-QdjRNZ1CSf3RCroReE+A2oHlGIgLgVrCNgGRZZBdcHoWtyOAngVAhtRCXCtzTd6LNewX8XnC8SP10TXkS7ZK9SAC-EmxN8W1DSOHEnCEcdJk2INgBdF2VpFnN8V6I5Q8kVfoMXV1yAlPgO0OeVZdEg3yBOncGElMOQukJpFenH0PhMaQzkK6c5Qm-04JggqUK4IXQt0M8dh9fU19CcSf0OB4xzce1JxptB5kTDgwv0Lz1mdZQ0aZi8HkJ35O9JZz2BWsK6DuAKw1EBrCKw-zBrFl3CVGLxZUaMLdcTnPsjOcIApsK4wSwxZ3a09gAcJrEYjDsMbCLQYvFSxewxl37DBwrYxiM7gKsPRthwzsIUCJUBvWrcRwOYQshBCFIMlE0DTTXLccAxgW5Y9w44JeBjNI8PdsQDV4GCCz2UIJyCzwkQS3C8A8+xCCfNKkLQMbwuPiEgZ9MIOWCsAC8Pntbw4IKvCygv8PaC-6fuyAA)

You can install ts-sql in your own project with `npm install @codemix/ts-sql` or
`yarn add @codemix/ts-sql` (TypeScript 4.1 is required).

An example query looks like this:

```typescript
import { Query } from "@codemix/ts-sql";

const db = {
  things: [
    { id: 1, name: "a", active: true },
    { id: 2, name: "b", active: false },
    { id: 3, name: "c", active: true },
  ],
} as const;

type ActiveThings = Query<
  "SELECT id, name AS nom FROM things WHERE active = true",
  typeof db
>;

// ActiveThings is now equal to the following type:
type Expected = [{ id: 1; nom: "a" }, { id: 3; nom: "c" }];
```

[See the full demo on the TypeScript playground!](https://www.typescriptlang.org/play?ts=4.1.0-dev.20200921#code/PQKhCgAIUgDeo0oENJVvcyKMa3-B2OaWx6pikgCaSCJpHfQzYDGktjjThnrb9LPDfJpUiAA0jEjAEaQ0J4kdWmzFnLgsXj5MtVMHD8tDnubLjhfSbOnm+3Xgu3pZTETIbH8gwX3Xolj1m78fPx0QcGCKjo+nkYEauLaonHqiXHatBLEacw2-jEm9n75yl7BId5IhoXOGAlF1egJWqquZDnu0aVVKp3FMQE8QlGxnEnJdaNiJnJ4EyKU8LCUlAAqABYAlgDOkFuQAIaQAMoAigAykAAmewAuewBGe5sApjsAtgAOADZPr08AdtcnhdIO8AK4AJyenwAnjs-pBltD3k9DgBjcHrd7XSDXJEvPZ-P4Ae1u13WRL+mwAdCsNttfgTttdVjcdtiicjwTcnttNkTvjDIBScXjtgBaSDQomgy5PABm6z++MgACIrrcHs8VQAaSgACgAVqDNtiDrjkftCSSbuS-gBKS3A5n-SAAR1BT3BsPW2ONioA5pA+b9IK8iZCRRaCcTSbbqZQAJLYzag97vcPXbYHFN3Z7suVHM7auGoz6gi4Bo4AUVOVYAwstIHqAO4+1aQVEUitkinbABkkANRMVmztup8CYAcocqwAlZbFgCqAAUACIAQWWVcdkFXNarW6DpJ+-0zNJ8tN273BRINT1R2M+6wAbjz9tjVtdru9NgAuYDAP6bagncVKdq8wCdhcPzrAAHsAmZipsrqfJQPqQM2jwYRiX4uncsJ1iy4LfNsy7rKiADWTYdkRJEAAJQTBsFgUSrzFp+35-gB1ytrh4IsRBqIAPrvORVF2ueMCUAAmtKHYEnCJp7J8nw4psSEoXCkrSuCQrNvC163ve2K8e2sB-O8ryKbcKmQAxRLQa8cEIepyGfLAQrgvM0J7OC8IjjZqn2Y5zmIW5Hl6oiyJohiWKQAALFSACMOzbJC7rrJCFwSUsPiRZiv6QKsRKvrpJWejiqwvOa+JPo8b53FCRLNjiRJBk81VVZAkIpp8mZCgWUoQm6HoYjydq5SAwDgDNAGQAAxJAi6bHs-pPLNwCQAAYplJoYS80EKkqlUHTcZosiZTwAOQRv6w5-IG1xtY1I2etClarXsAU0p2lLJusHx8pSkAALyQAA3lAIJPBy3yFQA2lDWDgzsFyFUlxYKuCJqTnsvyFSqABCvnXDqkCfI81y4-jqqHADP4UmTWyEesnxozi4IepAAC+454Cj6zswATJju1U3jTwE6cWx7GTFM4xLBN04DjPFszGxs4V1ycy8vNIxDqOFQAzKL2PizTKoALKrUBTxy5T1OS7T9NA0zmws5rHNc3r+AC+z8WmwrFvW+Ca320HTsqsrDN-G7Hvs3KynPDzfPI4bkAAKyB+bkcABKsZ64c50rLuq6l8eFYnnzJz7-PpwAbNnjsE5bFLXHdvxekXzeqoTEKUnHGsJ0nuupwbguFQA7E3iuqgA6lVFOx8W8vF7TTnOtjg+s8P1ej-rfuFQAHDPFuTqznzFcadsrw7s8qgAagp+egoCy-l0PWs6ynB-pwAnKfSOk4oSu1vhHFuoIAQAC9t6e21t7Meh9IBJQAAyAIJsuDEfxUSYmUt3e+hwKKKiVOCWBu8a58wALp8y+HsVEPIEa-z+AQ68AYFRQmBFWb4vwAS+WhGTZqJCEzs1QWrTY64HwvidvA-evtIDMLPqCUsTxfKQGXM1Cqy4l6k2LIIz0wjCqN1ShIskr4v4IKYffKspV-SQhdMsT0XJ6ECP0vo-2YiTFSPMbIuuCjI6t2JFyVmLihHsxPsYyRZjIBVwoZYi2yw7FX2TkSAs+dwQ3lIbo1x4IDHII8ZE6R39a5pz8Rgim0JbHSj+BcEJbjCoAIiaYwpFisDUPANzfY2xfomgANwbQRHSVKJ04Q+nWMpSApVNi2gGkKYa6p7j1RpDVXchNnwpTBjVFJQZS6Uj6eAOapwnjXCutsI6Toup+O2Fs5EsMXimWGaveREtnYq1jjSOac8XjX2GbAY4o1oQeWWU9SATxYL3lfi8d0np1g8jVtiW4FE3wHBOKcfZm0oVek6dEsWkYXjvF8hLQE4JiwEmBAceZmp8RMi6s8X6Fx3mbUnCSTqrJlKqRRZARF0JmzhguFmCMK5lxzjrOuGcSy8SQCrAADXWZAP5b0AA8UMo77gbNis2jtICiqeSGLas4ADyltoa3MgHPXOc5tyr01WDK60cgZXR1FDVcqykrgAAHx7IOUck52LqnDKxntUl5NKY6rfFstlwzURD0hP5eEzptmvM2OAZZ0qhagzlf8pVWAVW1jVQGnOYCc7bQNUam5XwXhmotR-He6aZGOqwM6tZ7rPWbUOcc05ipzn4guKCPq2xmzFWTpcyAjUgLwnuZbZNErpVG3TfKr0WbaaqsbDAPVhrjXltNea2c251Y1rBjEl465JyrnVRHSApwEwAGltxXUtgAUgdXzRtrqPX9LbT6zs6TjLDPNG1RUkBLasySddbYfiqRHEVPQ-Ytkar8peADV4r97jfC0lFFE6JMTsghGiy4Z1KVDMQ8hu4qGnpEmLHySquwMWwkhNcfuWZ5FPBahSxZU6LSNrTWDed0JF0qhXBuQ8ZbUMzkbPm61kA73AelM8K6W6q2C3TUfetKym1vtwx+rpVVKKVVZDpSAqZ1R3PDIii4M0U1SvinOzNOb6wruLeu4TFbt27uBGDZTxZOPqa9e2-YFwyVMZalGglD5PQkv9F9ONgy6MMf2IFvDGo2PLMbbO7jmblVThnPOSAU5lj6o3SJg8qN01JQxmeotNqElEmhFdQtEm72ojrGWSEtXq1s3TYelTnHm3menVKjO1nFW2bVauktBXnNVvE88yrN4atkxS95zai4-hygzJA7kMJizNheEqIErVZTfEBAiWbgHGvNfWsl1ZVm0uKuVXuWsh412lphpuytO7yv1aqzVrVJ7g3nptZbM7EJrpddWUbHr7GXjSvroNhdyqZy5rE2LTVT3xvyfe3u9rB6R6g+fPFCHHyXiogUnsfzgGiSdSJL1jjqyBs3bh9mzLc5Gy5fy056sjZFNg1K4A9Nd6KetatdNyThwoHQk2BTCirXMdueiTj59V2IcWcnrD3j8Pl2o159qvxDnnsmre7u92Q8Osjx+6eqbIZL03skw+p9TracE9bd6rMZPW6gYRHsUqfxIeqZh-TtXWArpM+y6zkEFN6HbFE6G9NVsKcAB0fXLE956d+eicmy5540qRtada1ft8+DOjvIAACl7qbAAIQXud5ANappYNdVoRHmDFJAz3PjcOrZzpMp6RIfGH30q-6q74wjuzobiyciBlSC3Txx+ekn0L3VY3G9vinJOOcJf9VTjR9qifwp9WTjD3QnkVI0-CPTbvv4VJBa49fS2yAhMKTGmiSo+jkJCqYKObiEEWCiUQeWLF0VRsYkaCbYB4HTRUYFDlOULkf0HhM8XDBMGvZPAzd4IUKLXYRqYnb5ZYQ4HcB+Q4OsByF4O4EkdsPUZ4SkdYEjaEB0HkYnC0JUZsJ8JUbYRUXDE0LBf0TYCjNqeNaUb8V+DCR4P4K6bEfFcEMkVEXtXyQUa8T-aEGkH3TBCAz0aVFBdNZQgERdZcXyZ4RdQPEfNVPxbUfiHXbVG8b4FHMba+bGLVXAmUVfdfYvTfA-Cwt8XSffAzKkNws-MGfiRTA3aPMGImIkO4FUM3fYbbYMF4DZb+S9S2BMRsNNfVLaLaKPI2K6KGN1CHfZMAcAGAEGQooo4oko0oso8oioyoqo6oyo-IuoioOoZQKsX7FIyVKVdcS2ZcWsQ4YsQ4ZYdcbLVohMTo2sS2Zo-o5YBMffeo-I0GGo+YhYxYpY6o-I6aanF4YRU8dYdhcEBVTVUFN+PlI8Tg9NDggMN1dNSGLAGqAmTYgEbYmFUhPpLAUpSAR2PpbmPZZZS2H4RqcEKsWCOQzYKZCkRdfVO4O8B8EFWCQ43kbWSsMGM4h6PmTBDkT0L-A4-4I4pEwMRE+Eh6d1S4qGG41UH414P4gEoEkE2OZ4oUCE4yQqcEyE64WkwyTkXEd-G8dk6ED4r4iVScUETuciaWIlZSBVJ+MsF4TE6pMDQUv49NP4OUz0C4sGK43FAmAUoU1EEUz0PBWk58ZSD0QqCUj0Xkn3Q4fE-0HUrkT4cUw0qUmErEuEk4vEzglUiGYkvEJWS060vUqGA0yU40+0s05ZB-fkFRP4X020k0h02EkdIkcMhSMGEgxMv4d0tUkkkI1MqMlUfU+0oMyUs0n3AUlSKMy49U1UEsz4HMnpCZfM+RXtVST49Y+-RUPhfVTkG4cMGPEGcIgAH1VHL17MgAHJVCtyrFzJ90JjbK9EpJ6mpMXUOTlGxGlKOLnJ5GpPTXXOBNtD5g7N1Kel0lXO2GnOYS9H3K5EPPTVPPbM7MPL5lnHWH9E-GhLjO3M3LBnfNtEJNVM9ORAJhvNnMBPnNtEnKwG+GXMKiXJZKhjRMvPDEZLvPDFpIxGfOuEKkfLQqLOWVOCJCAmJ0+AvK7N0mCOPVXH7NVH1VnAopVD7D7Bor7L7MnJwrwvImUi-NBKhmgtfKdMlWAo3OmU-P4p3IpD3KQqPMdJlIvVYoIqIqvLBlwvwuUjkvDAfKfJfOPL4qpMEq0pAopB-I9OuK9NVEUrYs+A4ppKhggvQqr2XNpLguIsQoPOQqhlQs-AwvUpgubJ9x2g4UOGRBwR2MXUOB0mg00ruLJB2JHMA1+NUOEo-Jy2gnuJ2L5nXDqm2HCqSsisePTQioeM9AMozOMpVF8rZn8vvHyqeKhj5AhHoUKhCtqqeFpOUjGT-C1XSuwolSTxIxRACsquCtCtjN4ryqirBhGseNSvSp4qkvGoqjBgavBHoUKr-Mjm6u+HKsCseLAqDEGvqsGuavSsKjStas6otHXB3P9D+DgIssXSvSeFhEyq2NGsSqeomqhhjOmrXPip0osuWqMv-NVHOqmUuuuu+sZlpK5UKjup5P9PrJjNOqhzBvhBBihgHNMoIpuoJGhGLHRuUvEpJT+GhGyKwAHMAuhExsJuLDJpUuJUtCJtRpivJLiu0v0pJpeuSseIZotM4KjIZs1OhW1J9F1NQjZrDO+AJF5rZqrKjL5ItATEJE9FL0VA2v6qhi2hvCsk0rWt6oqqCqxvdO1pVr1sJrdT5gXk9CGqkosq3KRr+orJVHlpISVr+CNq2tpOgNYkKnVtYlpIHQtsKnNshARpL3uldrmpywVvBGdrDvBFlpeEOChGMgtO5DgMXVKqOM0vTpjoVX1vhkoXTSzr6uNqJrzr5m9s1skqOMNqLseJzpNvTWrt1trv1r5mdoysru2Gjprs9DzvTS7qbp7raSwEDstq+pZuRt0oEtEqhn1TlDlDzE+tlKZpIobOXr5mlg3kXtXvlLBkVOXrtszITu+AfGTsBDgO2vYTZjavTs2Hdo1q9o1tpKHBHEKjbuirzt9qqjf1NS-qatgrnrzEZIAaOVpKfA3igoBh9GDvlueAkNPpPC0Khm1v2I7uOIRLpr5hjPbrjMhFJwpEFCBqfKutPApuxrprdV7rBixoPuKpgfRPgfPtpI1EsNnmQYljzMlLaqweDsXHeCMwYdPEXTYZDE0pxNOMtMwftOwd4sIZBpIaRsoa1QuuIYBAstLqhhHq3utqEvHpoYBv4z4e5AEYBG2uYaeB7mEb-qwADI9C4akc-v9p-otuDtXETsBGMeuCEZQ3MeeVEctPEc4LNt-q0aRptt0fTJWoJlccOxRGPEYeJO8YscSfYahj9u-pHuDo8dBi5sTpPridPAZrobgfyYBAZt4f4ZKeuAZuiaOViZTtPDjslRsaMcqcXWdS3tXHw3qjrqJr5iZWgi3o8YMv6dHsj1yeuCGawAAH4mnDSjHxmPGFVnViwRnibIBCoRmt6imJnKmoYZnrE5nARtnFnlm3iiC1mNmiCt7ymWn6nSnpnZmyxuQbn3HWnTnVmoZLmBnNKanXm7mqmHmDmnnARfm6mz7BH3nznPmmNSpGmgXQRuRjnWn7cOmum9CW6oZNnwrKR6Hdn3SsXUGkX-mFVFQ5QKpLG1YVsKpZGVHMw1mZm1T8B4Yr0tIuUtlnVKEoat7LH9Z8AZntnZxmp9DjBLGt62WCx2mZnnV4ZLH87ColRSox5lAaW4Ck0TA1nCBCppWr1KFaSsBuZoWFXPRGmBWhWkHvGt7cGLh8HYQsb1GsAVXTxpGpKrWbWlHgbaW1HKEDLEYsAfjQ4nhhXltbRlgiR5aiVaUew-hhWHWVJZwVFrW-gYQFUgbfjvgqwAQxpNgU20wYRHWARs3826W3UNXIA1nTaoYqQq3tbwBdWWy0rPh428Gk3eNlh0zuoE23XmXWX7qtllhOWERmX87vKU1mnAQXmwWEHPGUWfm0XA2MWsACW4yJ2hn8WrnNKV3kWsBSXyXknfg+Yd3dIi3uCoZD2nHIR3U9nDKCBu2ANxWVkB2WWta931plAZmJ3BXmxs3eXOBRXNL73JWVkZWX25WYWwsf3CBj2lXOAR6IO8BS38AtXCYh29WeZDWnhYWWyP3mpv2sBtbUrlHVXLXO2W33WiHQbx77Xz31oImsB4Z5boJYIe2pQCxtaB34XuQbrtb6PqlQVqFqOLjNKZF9Z33DHARP2FVuOGO+Pixj3S3CopPePYI62R2JVsPmxF1P2COPWiPNLXXSOi2vWDL-W1osGFUtP3W02ngM34SeQc2vhoRj2U3COnWS31NvjPRTOpHJOlx3STPA2oYUZb34R73+2uX-3e2CxFxIB32h31nB2dW0P3OJV1xc3HOXOC3nOdOnXiPm2CGMvrgvXaPIBgvOVIuyO5GC2B3j24vNLDOkbhXZrdiz3oaK38Az2YysiROSu4PoboPF3GyyzNKPqZnFTbJCoATSxyxA2ATtY6FrgYy7TJTTaGyVIEPIBvXEOwPY72k4WYSnEFv7TJODat7pahabSr2xuRb4vGxNKxaIyoySWqXdIYz6XIBOusAFPTvBSBbHuOv7S3uPubvBmfTzuxT-vlur2gf5WMPjWWyOOQW3HJ3U6Z3UHOnEt0WTa+n120ekfV300l3eLQXFmz2KW4QyXdIR63vGW8BSuAPCZH3uWX24OpWkfP3s2-3UH6eYugPZX4ujXaaqe4OkOUP9YDXPvtvGnQX2fJPvHiwqeC7WYiVltDpFQgRF0aeePGPmO+3vH2Ox3rOGvFPGP+OFehOdYf2ZnIFVelQzNNWPceqte+PaSDX1N+8Dej6k6t2VlUWMf52sfMWce4zPe8n-nhmg-eKQ+dniXT3nvtoYUr6D24-y6k+KeQ6RxU+KoR7M+PDgHrgc+L1IGqnsiZny6meers79Ymunu0+Fr6E2u8Bq+z3jrHhy2r26-RmyuWOVluub6t74ZC6B7djq+VQQAVQVuR+x+S3NuCBS+lfPQR6FVCCVJjJ5awRrgZfTmU-0-KQVuhf7fU3yTvgZe4OsAb7+u8BZuDub6Y3OAdo+oF-f6l-+Rj7rg1-X5N-CZixt+269-f6G+TA5-U-ngH8639lAwbCkKG3DZz5jItoMAcYEP49UbOWbBVPDHhgt9+waDZEkBw76UI8B63ZQAQIIBECsARA+Ttt3Q6lRwAMPTDj7mX6v93+G-HDm00Ji+8FkmPXpmrQ1qt0y8BlMvs+wr7d1diUMJvnHw74N9RBafDAdkTe4d8xW5XZ1N1zfqaV+6m1Qepb0gD0DjIbdJZl-xwGDV+OGA4sL-x-Yi9cB+sGgQVQl4C9GmWgh8DoNR5xl0e7A-3pwLw4Ws9OJHQUHayHrtVWqW9HEjwJHBb1VBlVPOj+UC509yubHQqHYKYHNgdBpzbjjq1k7pVjBZeN1KpwtBxDP2iQ1gbOz949MVuFnDAQEIkY79nWRxUITsTzoqkoYoAz9pAAHA099OgoKId3zfpYQr+83Z2hgIVRt0h2bqAdj+wGGJdsWTtUOkINl6CCh+CqSQRVGjqDUJ+WVfqme16HpUS2lLNPvv04AzNFhjVeQd30UEmA5+ZsLhFO31Tggqy8AwgN0IfDp1CY0IR2DcLv7z9wQi-YAcoDiHO0gQ64dJHsGhBbRwwEnT4cYGlb7DFqTwXwY0XwB3Drg6w1qv0LLyDCL+RQLTqCOVbpUMRxA1EcYFg4wiy2uIwgAiMeDYiSB8HYAZYK8jKAqRUMbmNkRmh0CX+2g+6L8P+GAjgRQrZ2trVy6JtvBhNUujv1KF+NAmDvY-s1GLDa1hRqDHEnUORjwxlwOvAsNyL16FR9YoAn9trU-Y-tmh8MYvOuC0gkjNgA7FUY72XCUJxeBAXUf0TQzeMMBA7LUc1EtGkC6Re3ObvcIT4XBHhzw-DvHw4SOx3SkQllne2iGqi-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-h+q-VtsoYYMW7qg1gCGFGwUmiqOnUdibAOkqOJzbpFnAoJZNna-AKAPBiX0+U7+DddjMeLSwTQCqFzRLC4kdIBwe68uhZr0L6bzOKCItbavLWhaNaSWwNtusgBIMiQiKP4OsCgS5aZ1vFfceJsaowbvNHartYVv+AlbA23m8rVJXhhXRRU0uOPrOHpUaDQ2RWpreZySitajilW6Ta1Rq1CwaJdiwLffQLHZ1FNBwgcLKOU3ZVpxpQ5bZaRLZxbL1zwZ2jlvM5CwiB9MggIVFm2e15tumppbsTkGba3SmQpobtqeD7aKYX6lrbstI0bqXtn65LYGLw4Trv1dmxwrOA3xb5PNBYx2B0k8Lg7vN7G7rnusllpbG1cfSkjVt60UStKITXRm+whjP1KQCMR2orUmGzCyN3jbOpYxW5wSLRj2vdSPQO0paetSGzgCdq27aLr5T2una9uS0A7DNj28GHjrap50DW66zNZzp+1lbsm-2ntQ2s0pzruuKMNJk7HWWuyZE90nuSlpl12bAi4OkenDox0I6GuZvVBmNoqio6wNXm1sSz0x2aVfqJwiGIrsKigC4JO2vdQhuuAHb3tJgFnadooH29wYDu+-AmXFpLK7Zqul3Rurd306edZSkXc8Ej1c6JdKNKXQZpG3bBYA8RRIpJvo3dafNiwFhf1sa2lbUtqekrmezd1o7ptMzN3dkugFrRwQpyrglbvBhgMfQhUWvZ6Ab0Yy3d1O+LRupw15gPdw24Xr7p91s6JezeovoVDFBJRw9ma-vUcnp1vosAsep4PPvd0J6q1SDaPdRpSJpEisMO3Pd1wL3Fai9LW5HVVLg3m6C56O2frBtw0rkue5XdvfXstLJSMd4MFJPfrb0gy69neopXnx71PaPGDicEE5GYSHkhtx2kfazoqVbcP9efQqD5pp0brgDnoMA8RWO57IV9qB0A22QgOUbk9gO2dZkRYXgxmZCnbfbLqHUaCyDTYtdaZo3Wnqp2Va-LSJs0qwBg8LOScHliz2k8X2HSKPODpvq+aoYPHWBtHzPWeMyee6+ruPQi2eMb6mwyTDWI+2far1YnTdeer+0ab2DAmTcNuHB2WMBD++7PWn2EPo4DDphrPr-REP4ADdXMo3XGRN26QzdOJOrbcMBJY6FZMXODvDGvWSGlJjsYsDIYK4WV5DUW9GZTpInFgiN6mwgKmOM2rrdF6m2zXGVgB6HDwhh-gxzl4PJ90Zthkrv4eYPSGN1shhWeEcUNU0g9D3FXTrCUNEbVDDBzNfepvXaHUjvFWAPdgPDbgPNVh3SEYYsO5HthNhjjfrHsP8LHDFWs9q4ctLuGc5nhm3aEz82cB4YLRgI2TzgkxGaxcRggAkZ-Z7G2Ddmro49jGxZGeqkO0Y3RzWPFGX2VR7MrUa+WEaVDGWtQ88D035j2jUlOdTMuSPGbj9g2zXU4YPFHir9b4jtawbwBfiB186g45CYTYDqru86+GFMuUiSivonwUDvrChOy6ZESJ5XaHrqNomLx8XLE-Cdl2Ho8T1Rk2XbMPQrcwTJJ-ANicf3d9n9nennsiZ+42zHurJ1-Z+ITb50Bwe9P4nSfRNys0J1fKE3dvOJEmMTOx+jtdsk6PaVtyhutivtiVccPjDWk-RLs0rwxaNfR3udzCpDg7lw7GmDfSeWN0d1TDXTqX1JlNtiQtma945lszUN7HuBBnQ3ZpVDg6Yy3Mb0wabbXXBfNJXN067Ne6Ly+1mJw42kaug+n7S3MWMwGb7XBmUNoPO2eGYLmRmGTT2601zLbZYGmjzwOsGyg1M2TCDgJ3it8dG6-Ga1KBtM6Mo13zjj1G6itaeCqhTJStFwDUwWYlR7qA5-Cj03uuLMqRSzupsvV4rPY9a5jWAPxW+SWOaitTg2xnefoqhhyr9s4KbT4eUD0LeK1NcSjz2AFDmSzwso7Sua82eUatRsac8YGsWoNralp-IPDH7NT1o2e8tc13MXlXmdjJgWEz+ZrMmB4YH8+ld+dp5AWxT8R-83gDXUr7iFeZ19RuufMiVo2FZtreOeXIV6tzeAf46fuG1nne5VC9c5uYfNYAdzUldxfuZmZwdxjL5w7SXucPeLPwl5684QFnO8V7zoI283OfHqYWiggF6RULK5lvmCLH5guV+bVGNFfzxgSSxBeXWJGb2YFkC4Ba8VTmdj0FwswoposenGz0Jn47JdrOZrYLA56PRcWbOZrWzAIds01q7NG9H1LZ3yG2Z5BWXSzNm6jXqHB2EEQZAIbmHaBh3JmONPqjdTdQ8tvxZ5mZ9tUur+W9nQtH0oQeEby1Ub2D4Or8bzCyOswUzCWmK7MJS1filDJ4jK35VitbApDPO9E9P2zOfGji+p4E6TiY24FwdGAjpKlc+Apmwt04lLXutzP8Kcr1KukwDpPUKnpBPVkU8Sb+OiaDTyVuwkMdnFsb-LiYgq1lb6sbrOrNF7q62N6s9r+r-GlNhsKGvgXPTaRpKwm0asGm3x6V6K-NaknZWE2Sh+k8ZoVHnWyqUwxs0MJdPPBWruxLS2NaA2ejarU1o9jJv8vvXUVS15JVxwB3p0S21K4I4wYVMpbBNPV9TR1dBs2W8LlsLY+CfVFJLl6N1M9p1PGkXE5+F1-qmjfZprbdifUoTYBi2bXaeeQNkm5bCE0JWZR-jQm49dmHvHVtFGozdt3U1qWormasoy+bittGvrcfZK9qCatnWBboRo3gDpysrc8rpRmW3IaKuScSrwEoYeVdFtp8JrYMOM5KWOt8G0rs1wW0hbmGw25b11lbtRbNspbXuFDVsY9osrDXZTo1xK+NaOvpp9bHoFM6bYXJ6bLbpOJQzbYXJ22AeDtgU5PSQua23bdmw6zVb+se5jb7JkI9l1Uay2e18t+0+pvuvS207hXDOynpeuvGngftuAZ9fdstd7qHSPWwad9P+Wy7oJavq12huZqbqr3alU7aRqM2XiZaxkT7mwuJ6t90ukvVVbFue3Jbs1r8dnb+OUG47HtmqxLZOvomUz09pO67eHsp7tbFUZK25eXvJ2ZmfJ0nDPc3tEGOj8di4N5cnvsm17t10+yhcqsX3Pi19w+7fdFMpG57B1he5fbtBT2QTV0O0Nsdnsj3t7ukZKz0j-vH3JMQ6vazK2j3o3SNP+TfdGeGoKmz2k4Am28RSNY3ypXM3GzBr6k899T+qI03RtNMeRY7cZN5ecoqgPxMH+ph+LJsoeR96zNpCNXQ555-JmUDe8Uj3f2u7mqTIe0Zarp56iFc82Du7oI8e60nRHFJiR6gxROqQZmV0RE+prmh0REIRDcMAdC5jApQUEeKZK+FlBYhVgTNtZVvIa5l6YNeN7rfQ7IdIPTgD2ujSQ6z2aFPGs4TIRQ7Me8VDLNFqx1fpsdp8PHRD+xxAWMVOPwYLj0J1oQ8dMPvHUlIG02s5tBVm+84h82CsaVbX1w63GZvqfXB66fd+ptxwqlhW-W6N+Trxyg6kryba68wmSZOJU0RrsnBN-WBk7jIGjcndGw4Ew7gBdOyn4MCp-I7jKE6o6xOy62TqmFJOr92TmDQrwfPR1X9qAoPJODXwg7nCU4VrMU5qfTieiWqeo-vk2dIOqe-HOTFdD4cVWxmr-RZj+2+vbTHtPg6Dts+a5njbjoJu0RsOg5rCy89zksZ87j7Z8bncfNfX87T5u79YLT4kaHUWe+HgBtqZdHnjRl3P0Vu4umr3T2FQvOC2bNx38K5C8ZKjkmGI5TbnW4iroT2BF8YC2cTOsrrzqUXONxELPMXqKn-Di4BE9jd+MRyTNnMICaNJH9xgk18qJnKHSZcAbXeDGKdU8zTwA6vZpWn2iO5MhUdPcMUz10a3dkrkwGvq3rqFlH8ruALvsEORO8+BTwgNCIICnPl5QzmRsrf4V1PzJ91Fbp8qeAQuCADLgMNm3SkxGQYhzsJ69xOecv1NsAeGCKhWf6pGwy4WcLlgRC5wEwuBQAm8X1R7hYA5a5l+yJYMXPUX4J8GO0L7YDstngwjpI9J9xcP9lAYRUyKPOJlmF1nBYK5Fg57FgVQDqEvTIiIf+nlgfpih3AETOturoiblsjxhKdFgfeBQlwUUPdIczdBrdvQiihLaNNtaLBncTaxZets30yWOdiU6jQ-A9g3E0VkjILBogqorwPYA6O8Zrv93ewYDucYliXjoGP+ufOml9aQA0EUMDGFDBFhQwTYUMAOFDCzhQxG4UMaeFDBPhQwAET7x91gB5xPvX3YH992B8-dgfv3YH392B--dgfAPYH4D1gCFigfIAQsZ9xh8g-YfoP2H2D9h-g-YfEP2H5D9h9Q-Yf0PkAI2Fh6Ni4e6P+Ho2IR6NjEejYpHo2OR6NiUejY1Ho2LR-ihYf4oTH+KPh-iiEf4oxH+KKR-ijkf4olH+KNR-ii0eM4WHjOEx4zj4eM4hHjOMR4zikeM45HjOJR4zjUeM4tH+uFh-rhMf64+H+uIR-rjEf64pH+uOR-riUf641H+uLR8nhYfJ4THyePh8niEfJ4xHyeKR8njkfJ4lHyeNR8ni0ej4WHo+Ex6Pj4ej4hHo+MR6Pikej45Ho+JR6PjUej4tHv+Fh7-hMe-4+Hv+IR7-jEe-4pHv+OR7-iUe-41Hv+LR9QRYfUETH1BPh9QSEfUExH1BKR9QTkfUElH1BNR9QRdfRET78D2B6SgDekoQ3pKCN6ShjekoE3pKFN6SgzekoXXzD3zGW99ehYA3oWEN6FgjehYY3oWBN6FhTehYM3oWF1-o8nfGPH3gb6x4+8jfOPH3ib7x4+8zfBPJ34T2D76-iewfQ36T2D7G-yewfU35T2D66-qeTvmn9HwN90-o+Rvhn9HxN9M-o+Zvlnk79Z9J99f7PpPob859J9jf3PpPqb959J9df-PJ3wL2z4G+he2fI3yL2z4m+xe2fM3xLyd+S8i++v6XkX0N+y8i+xv+XkX1N+K8i+uv5Xk75V9V8Dfavqvkb419V8TfWvqvmb5175iYesPmHpj5h-w+YfCPmH4j5h9I+YfyPmHyj5h+o+YfaPOH034t+w-Lfjfq3337b82++-Hfu333678O-G-jvL7nDxH8t+XeI-tv27xH8d+PeI-rv178b-e8vvPvWfy3z96z+2--vWfx30D6z+u-QfL78HxX-N9Q+K-1v2HxX-t8I+K-zv5HxX-d9o+X3GPzv5b+x+d-bfePzv-XFraNNgEMJZ-dsDGo3vbCupoU2FkgAnj0HBxcE6P+xBzKJU8tVEKm+yUr-x-PPHf1P4xn9sIrdquWlP7ZOqks3BYXf0qf8ZYR9TV6djQO3H9Dssh8dS0qG01J-FS3zJrZDycxfuk--V1xlZVTZZCEhU3PpA84A2FgzACguClSEksJB0XhgKIYdjhUkFFBVB44FZSwQUd1Biwf00je9Hcs24U8G5h70fyzQDVgHhz3lgrU8D4dOLDowICDTagK8syAm4HQDOCDNg3EqAogIBBaAzylAdNBbgKDNSAnnnICG9ZOgkJPFdCwEDPLftWM175RkRTQbgDMRNBCIXyBYN+HKSjHs0+ISG5hwdQmGDNWBQqDnVGmUQMtJxAzxmLNqkQWG5BobPiHhAy3B6HzFLAisCMwt6HQjsDwlb+GM1nA6wKOx3bdwKJQ-gXQINMdA-yybc5AlxRbJTA9gOqQl+UlF8CZ8eFQ8CHA-0CcD4g1wJ-UbgQIM8CuYbwPSDuQfgJ0CyHLIJTxgzcIKhh5An3GiCS3HwKMxbA7IJSC0gqwIyDUGKs0iVk4YzWqCHocwLiDmgmwKSDAgxt2-gZmcoL9ZWAigMtIOA3oJcD+ggIJTwhgrmBGCvA+oXGCeHKsCUCxYVQN2Jag7kGtsSgvyAWCXgJYNyCKgyIIHtt9Fy3YNE7QM2DMGdPtUptlgHs1P8sqCf2vYUEIwPJckoIwMDxjfb4LwByXI2D+D8Acl3iggQ01z5gM4MEMIByXeuChDOAcl0ng4Q5QDzxX-COiyofOKvFfBVIbnG0NDkLEJr1eOAtm659TaTgLYlLLEItE6NRsClMHoI13i4SQwkMzB4YSeEpDwYakKwF-QdjRNZ1CSf3RCroReE+A2oHlGIgLgVrCNgGRZZBdcHoWtyOAngVAhtRCXCtzTd6LNewX8XnC8SP10TXkS7ZK9SAC-EmxN8W1DSOHEnCEcdJk2INgBdF2VpFnN8V6I5Q8kVfoMXV1yAlPgO0OeVZdEg3yBOncGElMOQukJpFenH0PhMaQzkK6c5Qm-04JggqUK4IXQt0M8dh9fU19CcSf0OB4xzce1JxptB5kTDgwv0Lz1mdZQ0aZi8HkJ35O9JZz2BWsK6DuAKw1EBrCKw-zBrFl3CVGLxZUaMLdcTnPsjOcIApsK4wSwxZ3a09gAcJrEYjDsMbCLQYvFSxewxl37DBwrYxiM7gKsPRthwzsIUCJUBvWrcRwOYQshBCFIMlE0DTTXLccAxgW5Y9w44JeBjNI8PdsQDV4GCCz2UIJyCzwkQS3C8A8+xCCfNKkLQMbwuPiEgZ9MIOWCsAC8Pntbw4IKvCygv8PaC-6fuyAA)
