/**
 * Messages additionnels (erreurs, CGU, OTP, "Se souvenir de moi") pour les pages
 * LoginPage, RegisterPage et PasswordResetPage.
 *
 * Complète le namespace `auth` existant dans content.js.
 */

const AUTH_MESSAGES = {
  FR: {
    login: {
      rememberMe: 'Se souvenir de moi',
      errors: {
        generic: 'Erreur de connexion',
        adminRedirect: "Les administrateurs doivent utiliser l'espace admin : {url}",
        retry: 'Erreur de connexion. Veuillez réessayer.',
      },
    },
    register: {
      errors: {
        passwordMismatch: 'Les mots de passe ne correspondent pas',
        termsRequired: "Vous devez accepter les conditions d'utilisation",
        generic: "Erreur lors de l'inscription",
        retry: "Erreur lors de l'inscription. Veuillez réessayer.",
      },
      terms: {
        accept: "J'accepte les",
        termsLink: "conditions d'utilisation",
        and: 'et la',
        privacyLink: 'politique de confidentialité',
      },
    },
    reset: {
      otpLabel: 'Code OTP',
      newPasswordLabel: 'Nouveau mot de passe',
      updating: 'Mise à jour…',
      confirm: 'Réinitialiser',
      subtitleStep2: 'Code OTP et nouveau mot de passe',
      successCodeSent: 'Un code a été envoyé à votre email.',
      successPasswordUpdated: 'Mot de passe mis à jour. Redirection…',
      errorRequest: 'Erreur lors de la requête.',
      errorInvalidCode: 'Code invalide',
      errorReset: 'Erreur lors de la réinitialisation.',
    },
  },
  EN: {
    login: {
      rememberMe: 'Remember me',
      errors: {
        generic: 'Login error',
        adminRedirect: 'Administrators must use the admin space: {url}',
        retry: 'Login error. Please try again.',
      },
    },
    register: {
      errors: {
        passwordMismatch: 'Passwords do not match',
        termsRequired: 'You must accept the terms of use',
        generic: 'Registration error',
        retry: 'Registration error. Please try again.',
      },
      terms: {
        accept: 'I accept the',
        termsLink: 'terms of use',
        and: 'and the',
        privacyLink: 'privacy policy',
      },
    },
    reset: {
      otpLabel: 'OTP code',
      newPasswordLabel: 'New password',
      updating: 'Updating…',
      confirm: 'Reset',
      subtitleStep2: 'OTP code and new password',
      successCodeSent: 'A code has been sent to your email.',
      successPasswordUpdated: 'Password updated. Redirecting…',
      errorRequest: 'Request error.',
      errorInvalidCode: 'Invalid code',
      errorReset: 'Reset error.',
    },
  },
  ES: {
    login: {
      rememberMe: 'Recuérdame',
      errors: {
        generic: 'Error de inicio de sesión',
        adminRedirect: 'Los administradores deben usar el espacio admin: {url}',
        retry: 'Error de inicio de sesión. Vuelva a intentarlo.',
      },
    },
    register: {
      errors: {
        passwordMismatch: 'Las contraseñas no coinciden',
        termsRequired: 'Debe aceptar las condiciones de uso',
        generic: 'Error al registrarse',
        retry: 'Error al registrarse. Vuelva a intentarlo.',
      },
      terms: {
        accept: 'Acepto las',
        termsLink: 'condiciones de uso',
        and: 'y la',
        privacyLink: 'política de privacidad',
      },
    },
    reset: {
      otpLabel: 'Código OTP',
      newPasswordLabel: 'Nueva contraseña',
      updating: 'Actualizando…',
      confirm: 'Restablecer',
      subtitleStep2: 'Código OTP y nueva contraseña',
      successCodeSent: 'Se ha enviado un código a su correo.',
      successPasswordUpdated: 'Contraseña actualizada. Redirigiendo…',
      errorRequest: 'Error en la solicitud.',
      errorInvalidCode: 'Código no válido',
      errorReset: 'Error al restablecer.',
    },
  },
  PT: {
    login: {
      rememberMe: 'Lembrar-me',
      errors: {
        generic: 'Erro de início de sessão',
        adminRedirect: 'Os administradores devem usar o espaço admin: {url}',
        retry: 'Erro de início de sessão. Tente novamente.',
      },
    },
    register: {
      errors: {
        passwordMismatch: 'As palavras-passe não coincidem',
        termsRequired: 'Deve aceitar as condições de utilização',
        generic: 'Erro ao registar-se',
        retry: 'Erro ao registar-se. Tente novamente.',
      },
      terms: {
        accept: 'Aceito as',
        termsLink: 'condições de utilização',
        and: 'e a',
        privacyLink: 'política de privacidade',
      },
    },
    reset: {
      otpLabel: 'Código OTP',
      newPasswordLabel: 'Nova palavra-passe',
      updating: 'A atualizar…',
      confirm: 'Repor',
      subtitleStep2: 'Código OTP e nova palavra-passe',
      successCodeSent: 'Foi enviado um código para o seu email.',
      successPasswordUpdated: 'Palavra-passe atualizada. A redirecionar…',
      errorRequest: 'Erro no pedido.',
      errorInvalidCode: 'Código inválido',
      errorReset: 'Erro ao repor.',
    },
  },
  DE: {
    login: {
      rememberMe: 'Angemeldet bleiben',
      errors: {
        generic: 'Anmeldefehler',
        adminRedirect: 'Administratoren müssen den Admin-Bereich nutzen: {url}',
        retry: 'Anmeldefehler. Bitte erneut versuchen.',
      },
    },
    register: {
      errors: {
        passwordMismatch: 'Die Passwörter stimmen nicht überein',
        termsRequired: 'Sie müssen die Nutzungsbedingungen akzeptieren',
        generic: 'Fehler bei der Registrierung',
        retry: 'Fehler bei der Registrierung. Bitte erneut versuchen.',
      },
      terms: {
        accept: 'Ich akzeptiere die',
        termsLink: 'Nutzungsbedingungen',
        and: 'und die',
        privacyLink: 'Datenschutzrichtlinie',
      },
    },
    reset: {
      otpLabel: 'OTP-Code',
      newPasswordLabel: 'Neues Passwort',
      updating: 'Wird aktualisiert…',
      confirm: 'Zurücksetzen',
      subtitleStep2: 'OTP-Code und neues Passwort',
      successCodeSent: 'Ein Code wurde an Ihre E-Mail gesendet.',
      successPasswordUpdated: 'Passwort aktualisiert. Weiterleitung…',
      errorRequest: 'Anfragefehler.',
      errorInvalidCode: 'Ungültiger Code',
      errorReset: 'Fehler beim Zurücksetzen.',
    },
  },
  AR: {
    login: {
      rememberMe: 'تذكّرني',
      errors: {
        generic: 'خطأ في تسجيل الدخول',
        adminRedirect: 'يجب على المسؤولين استخدام مساحة الإدارة: {url}',
        retry: 'خطأ في تسجيل الدخول. حاول مرة أخرى.',
      },
    },
    register: {
      errors: {
        passwordMismatch: 'كلمتا المرور غير متطابقتين',
        termsRequired: 'يجب قبول شروط الاستخدام',
        generic: 'خطأ في التسجيل',
        retry: 'خطأ في التسجيل. حاول مرة أخرى.',
      },
      terms: {
        accept: 'أوافق على',
        termsLink: 'شروط الاستخدام',
        and: 'و',
        privacyLink: 'سياسة الخصوصية',
      },
    },
    reset: {
      otpLabel: 'رمز OTP',
      newPasswordLabel: 'كلمة المرور الجديدة',
      updating: 'جارٍ التحديث…',
      confirm: 'إعادة التعيين',
      subtitleStep2: 'رمز OTP وكلمة المرور الجديدة',
      successCodeSent: 'تم إرسال رمز إلى بريدك الإلكتروني.',
      successPasswordUpdated: 'تم تحديث كلمة المرور. جارٍ إعادة التوجيه…',
      errorRequest: 'خطأ في الطلب.',
      errorInvalidCode: 'رمز غير صالح',
      errorReset: 'خطأ في إعادة التعيين.',
    },
  },
  ZH: {
    login: {
      rememberMe: '记住我',
      errors: {
        generic: '登录错误',
        adminRedirect: '管理员必须使用管理后台：{url}',
        retry: '登录错误。请重试。',
      },
    },
    register: {
      errors: {
        passwordMismatch: '两次输入的密码不一致',
        termsRequired: '您必须接受使用条款',
        generic: '注册错误',
        retry: '注册错误。请重试。',
      },
      terms: {
        accept: '我接受',
        termsLink: '使用条款',
        and: '和',
        privacyLink: '隐私政策',
      },
    },
    reset: {
      otpLabel: 'OTP 验证码',
      newPasswordLabel: '新密码',
      updating: '正在更新…',
      confirm: '重置',
      subtitleStep2: 'OTP 验证码和新密码',
      successCodeSent: '验证码已发送至您的邮箱。',
      successPasswordUpdated: '密码已更新。正在跳转…',
      errorRequest: '请求错误。',
      errorInvalidCode: '验证码无效',
      errorReset: '重置错误。',
    },
  },
};

export const getAuthMessages = (language) => AUTH_MESSAGES[language] || AUTH_MESSAGES.FR;

export default AUTH_MESSAGES;
